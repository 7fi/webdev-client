<script setup lang="ts">
import { useAccountContext } from './AccountContext'
import * as client from './client'

// Restores the signed-in user from the server session after a reload.
// Layouts remount when switching between them, so remember that the check already ran
// (useState is shared app-wide) instead of re-fetching and blanking the page each time.
const checked = useState('kambaz-session-checked', () => false)
const pending = ref(!checked.value)
const { setCurrentUser } = useAccountContext()

onMounted(async () => {
  if (checked.value) return
  try {
    setCurrentUser(await client.profile())
  } catch {
    // 401 (no session) or server unreachable: signed out
    setCurrentUser(null)
  } finally {
    checked.value = true
    pending.value = false
  }
})
</script>
<template>
  <slot v-if="!pending" />
</template>

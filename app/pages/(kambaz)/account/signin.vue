<script setup lang="ts">
import * as db from '~/kambaz/database'
import { useAccountContext } from '~/kambaz/account/AccountContext'

definePageMeta({ layout: 'accounts' })

const credentials = ref({ username: '', password: '' })
const { setCurrentUser } = useAccountContext()

function signin() {
  const user = db.users.find(
    (u) =>
      u.username === credentials.value.username && u.password === credentials.value.password,
  )
  // No match: stay on Sign in and don't write a user
  if (!user) return
  setCurrentUser(user)
  navigateTo('/dashboard')
}
</script>
<template>
  <div id="wd-signin-screen" class="max-w-sm">
    <h1 class="mb-3 text-2xl font-semibold">Sign in</h1>
    <input
      id="wd-username"
      v-model="credentials.username"
      placeholder="username"
      class="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <input
      id="wd-password"
      v-model="credentials.password"
      placeholder="password"
      type="password"
      class="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      @keydown.enter="signin"
    />
    <label for="wd-ai-signin-note" class="mb-1 block text-sm font-medium">Sample note</label>
    <input id="wd-ai-signin-note" placeholder="sample note" class="mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <button
      id="wd-signin-btn"
      type="button"
      class="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      @click="signin"
    >
      Sign in
    </button>
    <NuxtLink id="wd-signup-link" to="/account/signup"> Sign up </NuxtLink>
  </div>
</template>

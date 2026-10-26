<script setup lang="ts">
const config = useRuntimeConfig()
const value = ref<string | undefined>()
const checked = ref(false)

// Read after mounting so this is the browser's copy of the config, not the server's.
onMounted(() => {
  value.value = config.lab3ServerMessage
  checked.value = true
})
</script>
<template>
  <p>In the browser: {{ checked ? (value ?? 'undefined') : '(checking...)' }}</p>
</template>

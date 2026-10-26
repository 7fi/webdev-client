<script setup lang="ts">
const ip = ref<string | null>(null)
const error = ref<string | null>(null)

onMounted(() => {
  fetch('https://api.ipify.org?format=json')
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return response.json()
    })
    .then((data: { ip: string }) => (ip.value = data.ip))
    .catch((err: Error) => (error.value = err.message))
})
</script>
<template>
  <div id="wd-client-ip-demo">
    <h3>Public IP address</h3>
    <p v-if="error">Could not look up your IP: {{ error }}</p>
    <p v-else>Your public IP: {{ ip ?? 'Looking up...' }}</p>
  </div>
</template>

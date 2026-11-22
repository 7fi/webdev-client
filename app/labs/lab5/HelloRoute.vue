<script setup lang="ts">
import * as client from '~/labs/lab5/client'

const hello = ref<{ message?: string }>({})
onMounted(() => {
  client.fetchHello().then((data) => (hello.value = data))
})
</script>
<template>
  <div id="wd-hello-route">
    <h3>Hello Route</h3>
    <h4>GET /api/lab5/hello (Nuxt server route)</h4>
    <pre>{{ JSON.stringify(hello, null, 2) }}</pre>
    <hr class="my-4" />
  </div>
</template>

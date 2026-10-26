<script setup lang="ts">
const { data } = await useFetch('/api/lab3/server-info')
</script>
<template>
  <div id="wd-server-component-demo">
    <h1>Server Component Demo</h1>
    <h2>Server Render Time</h2>
    <p>Rendered on server at: {{ data?.info.serverRenderTime }}</p>
    <h2>Server Information</h2>
    <pre>{{ JSON.stringify(data?.info, null, 2) }}</pre>
    <h2>Filesystem Access Demo</h2>
    <pre>{{ JSON.stringify(data?.files, null, 2) }}</pre>
  </div>
</template>

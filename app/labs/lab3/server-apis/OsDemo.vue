<script setup lang="ts">
const { data: info } = await useFetch('/api/lab3/server-apis/os')
</script>
<template>
  <div id="wd-os-demo">
    <h3>The os module</h3>
    <pre>{{ JSON.stringify(info, null, 2) }}</pre>
  </div>
</template>

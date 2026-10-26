<script setup lang="ts">
const { data } = await useFetch('/api/lab3/server-apis/node-version')
</script>
<template>
  <div id="wd-child-process-demo">
    <h3>child_process</h3>
    <p>Output of node --version: {{ data?.output }}</p>
  </div>
</template>

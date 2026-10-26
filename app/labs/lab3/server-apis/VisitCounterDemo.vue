<script setup lang="ts">
const { data } = await useFetch('/api/lab3/server-apis/visits')
</script>
<template>
  <div id="wd-visit-counter-demo">
    <h3>Visit counter</h3>
    <p>This page has been rendered {{ data?.visits }} times.</p>
    <p>Counter file: {{ data?.counterFile }}</p>
  </div>
</template>

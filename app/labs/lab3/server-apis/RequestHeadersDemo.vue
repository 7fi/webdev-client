<script setup lang="ts">
const { data } = await useFetch('/api/lab3/server-apis/headers')
</script>
<template>
  <div id="wd-request-headers-demo">
    <h3>Request headers</h3>
    <p>User agent: {{ data?.userAgent }}</p>
    <p>Your IP as the server sees it: {{ data?.ip }}</p>
  </div>
</template>

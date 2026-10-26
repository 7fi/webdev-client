<script setup lang="ts">
import ClientTime from './ClientTime.vue'
const { data } = await useFetch('/api/lab3/server-apis/time')
</script>
<template>
  <div id="wd-server-time-demo">
    <h3>Server time vs client time</h3>
    <p>Server time (UTC): {{ data?.serverTime }}</p>
    <ClientTime />
  </div>
</template>

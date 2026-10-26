<script setup lang="ts">
import EnvClientCheck from './EnvClientCheck.vue'
const { data } = await useFetch('/api/lab3/server-apis/env')
</script>
<template>
  <div id="wd-env-demo">
    <h3>runtimeConfig (process.env)</h3>
    <p>On the server: {{ data?.message }}</p>
    <EnvClientCheck />
  </div>
</template>

<script setup lang="ts">
const pathname = window.location.pathname
</script>
<template>
  <div id="wd-client-component-demo">
    <h1>Client Component Demo</h1>
    <p>Current pathname: {{ pathname }}</p>
    <p>Pathname length: {{ pathname.length }}</p>
    <p>Last segment: {{ pathname.split('/').pop() }}</p>
  </div>
</template>

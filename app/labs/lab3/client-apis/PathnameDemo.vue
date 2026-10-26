<script setup lang="ts">
const route = useRoute()
const segments = computed(() => route.path.split('/').filter((segment) => segment !== ''))
</script>
<template>
  <div id="wd-pathname-demo">
    <h3>useRoute().path</h3>
    <p>Pathname: {{ route.path }}</p>
    <p>Segments: {{ JSON.stringify(segments) }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const name = computed(() => (typeof route.query.name === 'string' ? route.query.name : 'stranger'))
const queryString = computed(() => new URL(route.fullPath, 'http://localhost').search.slice(1))
</script>
<template>
  <div id="wd-search-params-demo">
    <h3>useRoute().query</h3>
    <p>Hello, {{ name }}!</p>
    <p>Query string: {{ queryString || '(empty)' }}</p>
    <NuxtLink :to="{ query: { name: 'Alice' } }">Say hi to Alice</NuxtLink>
  </div>
</template>

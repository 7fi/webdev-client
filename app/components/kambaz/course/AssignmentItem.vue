<script setup lang="ts">
defineProps<{ cid: string; aid: string; title: string; details: string }>()
</script>

<template>
  <li>
    <NuxtLink :to="`/courses/${cid}/assignments/${aid}`">{{ title }}</NuxtLink>
    <p>{{ details }}</p>
  </li>
</template>

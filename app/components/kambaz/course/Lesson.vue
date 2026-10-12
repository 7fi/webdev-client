<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <li class="wd-lesson">
    <span class="wd-title">{{ title }}</span>
    <ul class="wd-content">
      <slot />
    </ul>
  </li>
</template>

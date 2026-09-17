<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <li className="wd-lesson">
    <span className="wd-title">{{ title }}</span>
    <ul className="wd-content">
      <slot />
    </ul>
  </li>
</template>

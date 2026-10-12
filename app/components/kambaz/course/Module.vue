<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <li class="wd-module">
    <div class="wd-title">{{ title }}</div>
    <ul class="wd-lessons">
      <slot />
    </ul>
  </li>
</template>

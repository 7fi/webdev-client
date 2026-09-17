<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <li className="wd-module">
    <div className="wd-title">{{ title }}</div>
    <ul className="wd-lessons">
      <slot />
    </ul>
  </li>
</template>

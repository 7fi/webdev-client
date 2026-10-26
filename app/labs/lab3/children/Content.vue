<script setup lang="ts">
const { width, height } = defineProps<{ width: number; height: number }>()
</script>
<template>
  <div :style="{ width: `${width}px`, height: `${height}px`, backgroundColor: '#8CB6C0' }">
    <slot />
  </div>
</template>

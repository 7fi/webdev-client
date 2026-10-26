<script setup lang="ts">
const { padding } = defineProps<{ padding: number }>()
</script>
<template>
  <div :style="{ padding: `${padding}px`, backgroundColor: '#C3D08B' }">
    <slot />
  </div>
</template>

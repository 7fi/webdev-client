<script setup lang="ts">
const { margin } = defineProps<{ margin: number }>()
</script>
<template>
  <div :style="{ margin: `${margin}px`, backgroundColor: '#F9CC9D' }">
    <slot />
  </div>
</template>

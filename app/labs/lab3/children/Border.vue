<script setup lang="ts">
// Named borderStyle, not style: Vue treats a style attribute on a component as CSS, not a prop.
const {
  width,
  borderStyle = 'solid',
  color = 'black',
  radius = 0,
} = defineProps<{
  width: number
  borderStyle?: string
  color?: string
  radius?: number
}>()
</script>
<template>
  <div
    :style="{
      borderWidth: `${width}px`,
      borderStyle,
      borderColor: color,
      borderRadius: `${radius}px`,
      backgroundColor: '#FDDD9B',
    }"
  >
    <slot />
  </div>
</template>

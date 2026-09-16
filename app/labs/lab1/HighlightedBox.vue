<script setup lang="ts">
withDefaults(
  defineProps<{
    backgroundColor?: string
    borderColor?: string
    borderWidth?: string
    borderRadius?: string
  }>(),
  {
    backgroundColor: 'lightyellow',
    borderColor: 'orange',
    borderWidth: '2px',
    borderRadius: '8px',
  },
)
</script>

<template>
  <div
    :style="{
      backgroundColor,
      borderColor,
      borderWidth,
      borderStyle: 'solid',
      borderRadius,
      padding: '0.75rem 1rem',
      marginBottom: '0.75rem',
    }">
    <slot />
  </div>
</template>

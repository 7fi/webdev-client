<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string
    backgroundColor?: string
    borderColor?: string
    borderWidth?: string | number
    borderRadius?: string | number
  }>(),
  {
    text: 'This paragraph is highlighted using component props.',
    backgroundColor: 'lightyellow',
    borderColor: 'orange',
    borderWidth: '2px',
    borderRadius: '8px',
  },
)
</script>

<template>
  <p
    :style="{
      backgroundColor,
      borderColor,
      borderWidth,
      borderStyle: 'solid',
      borderRadius,
      padding: '0.5rem 0.75rem',
    }">
    {{ text }}
  </p>
</template>

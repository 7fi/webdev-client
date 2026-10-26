<script setup lang="ts">
const {
  borderStyle = 'solid',
  borderColor = 'black',
  borderWidth = 1,
  width,
  height,
  position = 'static',
  padding = 0,
  margin = 0,
  borderRadius = 0,
  boxShadow = 'none',
} = defineProps<{
  borderStyle?: string
  borderColor?: string
  borderWidth?: number
  width?: number
  height?: number
  position?: 'static' | 'relative'
  padding?: number
  margin?: number
  borderRadius?: number
  boxShadow?: string
}>()

// Unlike React, Vue doesn't append "px" to numeric style values.
const px = (n?: number) => (n === undefined ? undefined : `${n}px`)

const style = computed(() => ({
  borderStyle,
  borderColor,
  borderWidth: px(borderWidth),
  width: px(width),
  height: px(height),
  position,
  padding: px(padding),
  margin: px(margin),
  borderRadius: px(borderRadius),
  boxShadow,
}))
</script>
<template>
  <div :style="style">
    <slot />
  </div>
</template>

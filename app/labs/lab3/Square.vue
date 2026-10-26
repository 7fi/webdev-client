<script setup lang="ts">
const slots = useSlots()
const square = () => {
  const num = Number(slots.default?.()[0]?.children)
  return num * num
}
</script>
<template>
  <span id="wd-square">{{ square() }}</span>
</template>

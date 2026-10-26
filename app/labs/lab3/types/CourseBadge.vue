<script setup lang="ts">
type Props = {
  number: string
  credits?: number
}
const { number, credits = 4 } = defineProps<Props>()
</script>
<template>
  <div style="border: 1px solid gray; padding: 5px; margin: 5px">
    <strong>{{ number }}</strong> ({{ credits }} credits): <slot />
  </div>
</template>

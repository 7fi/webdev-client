<script setup lang="ts">
import Middle from './Middle.vue'

defineProps<{
  count: number
  setCount: (n: number) => void
}>()
</script>
<template>
  <div id="wd-prop-drill-child" class="mb-2 rounded border border-neutral-200 p-3">
    <h4>Child</h4>
    <p>This component never uses count itself. It only forwards props.</p>
    <Middle :count="count" :set-count="setCount" />
  </div>
</template>

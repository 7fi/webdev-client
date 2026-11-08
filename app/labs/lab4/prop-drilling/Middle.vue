<script setup lang="ts">
import Grandchild from './Grandchild.vue'

defineProps<{
  count: number
  setCount: (n: number) => void
}>()
</script>
<template>
  <div id="wd-prop-drill-middle" class="rounded border border-neutral-200 p-3">
    <h4>Middle</h4>
    <p>This component also only forwards props.</p>
    <Grandchild :count="count" :set-count="setCount" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number
  setCount: (n: number) => void
}>()
</script>
<template>
  <div id="wd-prop-drill-grandchild" class="rounded border border-neutral-200 p-3">
    <h4>Grandchild</h4>
    <p>Count: {{ count }}</p>
    <button
      type="button"
      @click="setCount(count + 1)"
      class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
    >
      Increment in grandchild
    </button>
  </div>
</template>

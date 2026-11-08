<script setup lang="ts">
import { useCounterStore } from './counterStore'

// No selectors needed: Vue tracks which fields the template reads,
// so this component only re-renders when store.count changes.
const store = useCounterStore()
</script>

<template>
  <div id="wd-zustand-counter">
    <h3>Pinia Counter: {{ store.count }}</h3>
    <button
      id="wd-zustand-up-click"
      type="button"
      class="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="store.up"
    >
      Up
    </button>
    <button
      id="wd-zustand-down-click"
      type="button"
      class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="store.down"
    >
      Down
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterContext } from './CounterContext.vue'

const { count, setCount } = useCounterContext()
</script>

<template>
  <div id="wd-context-counter-write">
    <h3>Writer</h3>
    <button
      id="wd-context-up-click"
      type="button"
      class="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="setCount(count + 1)"
    >
      Up
    </button>
    <button
      id="wd-context-down-click"
      type="button"
      class="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="setCount(count - 1)"
    >
      Down
    </button>
    <button
      id="wd-context-reset-click"
      type="button"
      class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="setCount(7)"
    >
      Reset
    </button>
  </div>
</template>

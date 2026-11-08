<script setup lang="ts">
const counter = defineModel<number>('counter', { required: true })
</script>
<template>
  <div id="wd-child-state">
    <h3>Counter {{ counter }}</h3>
    <button
      type="button"
      @click="counter++"
      id="wd-increment-child-state-click"
      class="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
    >
      Increment
    </button>
    <button
      type="button"
      @click="counter--"
      id="wd-decrement-child-state-click"
      class="ml-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
    >
      Decrement
    </button>
    <button
      type="button"
      @click="counter = 123"
      id="wd-reset-child-state-click"
      class="ml-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
    >
      Reset
    </button>
  </div>
</template>

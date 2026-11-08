<script lang="ts" setup>
const count = ref(7)
</script>
<template>
  <div id="wd-counter">
    <h2>Counter: {{ count }}</h2>
    <button type="button" @click="count++" id="wd-counter-up-click" class="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white">Up</button>
    <button type="button" @click="count--" id="wd-counter-down-click" class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">Down</button>
    <button type="button" @click="count = 7" id="wd-counter-down-click" class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">Reset</button>

    <hr />
  </div>
</template>

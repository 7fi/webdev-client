<script setup lang="ts">
const hello = () => {
  alert('Hello World!')
}
const lifeIs = (good: string) => {
  alert(good)
}
</script>
<template>
  <div id="wd-passing-data-on-event">
    <h2>Passing Data on Event</h2>
    <button type="button" id="wd-pass-data-click" class="me-2 rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium" @click="hello">Pass Data</button>
    <button type="button" id="wd-pass-data-parameter-click" class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" @click="() => lifeIs('Life is Good!')">Pass Data Parameter</button>
    <button type="button" id="wd-pass-data-course-click" class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" @click="() => lifeIs('Web Development')">Web Dev!</button>
    <hr />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message: string
  theFunction: (message: string) => void
  theNameFunction: () => void
  theOtherFunction: () => void
}>()
</script>
<template>
  <div id="wd-passing-functions">
    <h2>Passing Functions</h2>
    <button type="button" @click="() => theFunction(`From parent: ${message}`)" id="wd-pass-functions-click" class="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white">Invoke the Function</button>
    <button type="button" @click="theNameFunction" id="wd-pass-functions-name-click" class="ml-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">Invoke the Name Function</button>
    <button type="button" @click="theOtherFunction" id="wd-pass-functions-other-click" class="ml-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">Invoke the Other Function</button>
    <hr />
  </div>
</template>

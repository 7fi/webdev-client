<script lang="ts" setup>
import '~/labs/lab2/tailwind/utilities.css'

const hello = () => {
  alert('Hello World!')
}
const helloName = () => {
  alert('Hello from Carter!')
}
const goodbye = () => {
  alert('Goodbye World!')
}
</script>
<template>
  <div id="wd-click-event">
    <h2>Click Event</h2>
    <button type="button" @click="hello" id="wd-onclick-hello" class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">Click Hello</button>
    <button type="button" @click="helloName" id="wd-onclick-helloName" class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">Hello Name</button>
    <button type="button" @click="goodbye" id="wd-onclick-goodbye" class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white">Goodbye World</button>
    <hr />
  </div>
</template>

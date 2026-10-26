<script setup lang="ts">
type WindowInfo = {
  protocol: string
  host: string
  port: string
  width: number
  height: number
}
const info = ref<WindowInfo | null>(null)

const update = () => {
  info.value = {
    protocol: window.location.protocol,
    host: window.location.host,
    port: window.location.port || '(default)',
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

onMounted(() => {
  update()
  window.addEventListener('resize', update)
})
onUnmounted(() => {
  window.removeEventListener('resize', update)
})
</script>
<template>
  <div id="wd-window-demo">
    <h3>The window object</h3>
    <ul v-if="info">
      <li>Protocol: {{ info.protocol }}</li>
      <li>Host: {{ info.host }}</li>
      <li>Port: {{ info.port }}</li>
      <li>Window size: {{ info.width }} x {{ info.height }}</li>
    </ul>
    <p v-else>Loading window info...</p>
  </div>
</template>

<script setup lang="ts">
const time = ref<string | null>(null)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const tick = () => (time.value = new Date().toLocaleTimeString())
  tick()
  timer = setInterval(tick, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>
<template>
  <p>Browser time: {{ time ?? '(waiting for the browser...)' }}</p>
</template>

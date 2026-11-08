<script setup lang="ts">
import { useCounterContext } from './CounterContext.vue'

const { count } = useCounterContext()
</script>

<template>
  <div id="wd-context-counter-read">
    <h3>Reader: {{ count }}</h3>
  </div>
</template>

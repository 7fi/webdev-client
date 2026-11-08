<script setup lang="ts">
import { ref } from 'vue'
import Child from './prop-drilling/Child.vue'

const count = ref(0)
const setCount = (n: number) => {
  count.value = n
}
</script>
<template>
  <div id="wd-prop-drilling">
    <h2>Prop Drilling</h2>
    <p>Parent count: {{ count }}</p>
    <Child :count="count" :set-count="setCount" />
    <hr />
  </div>
</template>

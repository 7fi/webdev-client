<script setup lang="ts">
const { a, b } = defineProps<{ a: number; b: number }>()
</script>
<template>
  <div id="wd-add">
    <h4>Add</h4>
    a = {{ a }}
    b = {{ b }} <br />
    a + b = {{ a + b }}
    <hr />
  </div>
</template>

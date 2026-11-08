<script setup lang="ts">
import ChildStateComponent from './ChildStateComponent.vue'

const counter = ref(123)
</script>
<template>
  <div id="wd-parent-state">
    <h2>Counter {{ counter }}</h2>
    <ChildStateComponent v-model:counter="counter" />
    <hr />
  </div>
</template>

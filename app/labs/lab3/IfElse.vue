<script setup lang="ts">
let true1 = true,
  false1 = false
</script>
<template>
  <div id="wd-if-else">
    <h4>If Else</h4>
    <p v-if="true1">true1</p>
    <p v-if="!false1">!false1</p>
    <p v-else>false1</p>
    <p v-if="!false1">not false1</p>
    <p v-if="false1">false1</p>
    <hr />
  </div>
</template>

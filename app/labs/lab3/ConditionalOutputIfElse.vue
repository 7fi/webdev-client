<script setup lang="ts">
const loggedIn = true
</script>
<template>
  <h2 v-if="loggedIn" id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>
  <h2 v-else id="wd-conditional-output-if-else-login">Please login If Else</h2>
</template>

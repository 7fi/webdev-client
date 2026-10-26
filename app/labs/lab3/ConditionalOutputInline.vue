<script setup lang="ts">
const loggedIn = false
const guest = true
const admin = true
</script>
<template>
  <h2 v-if="loggedIn">Welcome Inline</h2>
  <h2 v-else>Please login Inline</h2>
  <h2 v-if="guest">Guest Inline</h2>
  <h2 v-if="admin">Admin Inline</h2>
</template>

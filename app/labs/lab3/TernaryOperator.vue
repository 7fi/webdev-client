<script setup lang="ts">
let loggedIn = true
const hour = 9
const premium = false
</script>
<template>
  <div id="wd-ternary-operator">
    <h4>Logged In</h4>
    <p v-if="loggedIn">Welcome</p>
    <p v-else>Please login</p>

    <p v-if="hour < 12">Good morning</p>
    <p v-else>Good afternoon</p>

    <p v-if="premium">Premium</p>
    <p v-else>Free</p>

    <hr />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'accounts' })
</script>
<template>
  <div id="wd-signin-screen">
    <h3>Sign in</h3>
    <input placeholder="username" class="wd-username" defaultValue="ada" />
    <br />
    <input placeholder="password" type="password" class="wd-password" defaultValue="123" />
    <br />
    <NuxtLink to="/dashboard" id="wd-signin-btn"> Sign in </NuxtLink>
    <br />
    <NuxtLink to="/account/signup" id="wd-signup-link"> Sign up </NuxtLink>
  </div>
</template>

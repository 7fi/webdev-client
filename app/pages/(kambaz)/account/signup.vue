<script setup lang="ts">
definePageMeta({ layout: 'accounts' })
</script>
<template>
  <div id="wd-signup-screen">
    <h3>Sign up</h3>
    <input placeholder="username" className="wd-username" defaultValue="ada" />
    <br />
    <input placeholder="password" type="password" className="wd-password" defaultValue="123" />
    <br />
    <input placeholder="verify password" type="password" className="wd-password-verify" />
    <br />
    <NuxtLink to="/account/profile">Sign up</NuxtLink>
    <br />
    <NuxtLink to="/account/signin">Sign in</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'accounts' })
</script>
<template>
  <div id="wd-signup-screen" class="max-w-sm">
    <h1 class="mb-3 text-2xl font-semibold">Sign up</h1>
    <input placeholder="username" defaultValue="ada" class="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <input placeholder="password" type="password" defaultValue="123" class="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <input placeholder="verify password" type="password" class="wd-password-verify mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <NuxtLink id="wd-signup-btn" to="/account/profile" class="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"> Sign up </NuxtLink>
    <NuxtLink id="wd-signin-link" to="/account/signin"> Sign in </NuxtLink>
  </div>
</template>

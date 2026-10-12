<script setup lang="ts">
definePageMeta({ layout: 'accounts' })
</script>
<template>
  <div id="wd-signin-screen" class="max-w-sm">
    <h1 class="mb-3 text-2xl font-semibold">Sign in</h1>
    <input placeholder="username" defaultValue="ada" class="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <input placeholder="password" type="password" defaultValue="123" class="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <label for="wd-ai-signin-note" class="mb-1 block text-sm font-medium">Sample note</label>
    <input id="wd-ai-signin-note" placeholder="sample note" class="mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <NuxtLink id="wd-signin-btn" to="/dashboard" class="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"> Sign in </NuxtLink>
    <NuxtLink id="wd-signup-link" to="/account/signup"> Sign up </NuxtLink>
  </div>
</template>

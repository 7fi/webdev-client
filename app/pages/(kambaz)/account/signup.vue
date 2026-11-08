<script setup lang="ts">
import { emptyUser, useAccountContext } from '~/kambaz/account/AccountContext'

definePageMeta({ layout: 'accounts' })

const username = ref('')
const password = ref('')
const verifyPassword = ref('')
const { setCurrentUser } = useAccountContext()

function signup() {
  if (!username.value || !password.value) return
  if (password.value !== verifyPassword.value) return
  setCurrentUser({
    ...emptyUser,
    _id: crypto.randomUUID(),
    username: username.value,
    password: password.value,
  })
  navigateTo('/account/profile')
}
</script>
<template>
  <div id="wd-signup-screen" class="max-w-sm">
    <h1 class="mb-3 text-2xl font-semibold">Sign up</h1>
    <input
      id="wd-username"
      v-model="username"
      placeholder="username"
      class="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <input
      id="wd-password"
      v-model="password"
      placeholder="password"
      type="password"
      class="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <input
      id="wd-password-verify"
      v-model="verifyPassword"
      placeholder="verify password"
      type="password"
      class="wd-password-verify mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      @keydown.enter="signup"
    />
    <p v-if="verifyPassword && password !== verifyPassword" class="mb-2 text-sm text-red-600">
      Passwords don't match.
    </p>
    <button
      id="wd-signup-btn"
      type="button"
      class="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      @click="signup"
    >
      Sign up
    </button>
    <NuxtLink id="wd-signin-link" to="/account/signin"> Sign in </NuxtLink>
  </div>
</template>

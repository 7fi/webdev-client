<script setup lang="ts">
import axios from 'axios'
import * as client from '~/kambaz/account/client'
import { emptyUser, useAccountContext } from '~/kambaz/account/AccountContext'

definePageMeta({ layout: 'accounts' })

const username = ref('')
const password = ref('')
const verifyPassword = ref('')
const errorMessage = ref<string | null>(null)
const { setCurrentUser } = useAccountContext()

const signup = async () => {
  if (!username.value || !password.value) return
  if (password.value !== verifyPassword.value) return
  try {
    // emptyUser fills in the other fields so Profile has every property; the server assigns _id
    const { _id, ...blank } = emptyUser
    const current = await client.signup({ ...blank, username: username.value, password: password.value })
    setCurrentUser(current)
    navigateTo('/account/profile')
  } catch (error) {
    // 400 { message: 'Username already in use' } from the server
    errorMessage.value = axios.isAxiosError(error) ? (error.response?.data?.message ?? error.message) : String(error)
  }
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
    <p v-if="errorMessage" id="wd-signup-error" class="mb-2 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
      {{ errorMessage }}
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

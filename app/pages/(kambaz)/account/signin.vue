<script setup lang="ts">
import axios from 'axios'
import * as client from '~/kambaz/account/client'
import { useAccountContext } from '~/kambaz/account/AccountContext'

definePageMeta({ layout: 'accounts' })

const credentials = ref({ username: '', password: '' })
const errorMessage = ref<string | null>(null)
const { setCurrentUser } = useAccountContext()

const signin = async () => {
  try {
    const user = await client.signin(credentials.value)
    setCurrentUser(user)
    navigateTo('/dashboard')
  } catch (error) {
    // No match (401): stay on Sign in, don't write a user, and show the server's message
    errorMessage.value = axios.isAxiosError(error) ? (error.response?.data?.message ?? error.message) : String(error)
  }
}
</script>
<template>
  <div id="wd-signin-screen" class="max-w-sm">
    <h1 class="mb-3 text-2xl font-semibold">Sign in</h1>
    <input
      id="wd-username"
      v-model="credentials.username"
      placeholder="username"
      class="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <input
      id="wd-password"
      v-model="credentials.password"
      placeholder="password"
      type="password"
      class="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      @keydown.enter="signin"
    />
    <label for="wd-ai-signin-note" class="mb-1 block text-sm font-medium">Sample note</label>
    <input id="wd-ai-signin-note" placeholder="sample note" class="mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <p v-if="errorMessage" id="wd-signin-error" class="mb-2 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
      {{ errorMessage }}
    </p>
    <button
      id="wd-signin-btn"
      type="button"
      class="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      @click="signin"
    >
      Sign in
    </button>
    <NuxtLink id="wd-signup-link" to="/account/signup"> Sign up </NuxtLink>
  </div>
</template>

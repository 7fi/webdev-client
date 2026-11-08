<script setup lang="ts">
import { useAccountContext, type User } from '~/kambaz/account/AccountContext'

definePageMeta({ layout: 'accounts' })

const { currentUser, setCurrentUser } = useAccountContext()

// Local copy of the signed-in user, so typing edits the form without writing the context
const profile = ref<User | null>(null)

// Vue's version of useEffect(..., [currentUser]): runs now and whenever currentUser changes
watch(
  currentUser,
  (user) => {
    if (!user) {
      navigateTo('/account/signin')
      return
    }
    profile.value = { ...user }
  },
  { immediate: true },
)

function signout() {
  setCurrentUser(null)
  navigateTo('/account/signin')
}
</script>

<template>
  <div v-if="profile" id="wd-profile-screen" class="max-w-sm">
    <h1 class="mb-3 text-2xl font-semibold">Profile</h1>
    <input
      id="wd-username"
      v-model="profile.username"
      placeholder="username"
      class="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <input
      id="wd-password"
      v-model="profile.password"
      placeholder="password"
      type="password"
      class="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <input
      id="wd-firstname"
      v-model="profile.firstName"
      placeholder="First Name"
      class="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <input
      id="wd-lastname"
      v-model="profile.lastName"
      placeholder="Last Name"
      class="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <input
      id="wd-email"
      v-model="profile.email"
      type="email"
      placeholder="email"
      class="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
    />
    <select
      id="wd-role"
      v-model="profile.role"
      class="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
    >
      <option value="USER">User</option>
      <option value="ADMIN">Admin</option>
      <option value="FACULTY">Faculty</option>
      <option value="TA">Teaching Assistant</option>
      <option value="STUDENT">Student</option>
    </select>
    <button
      id="wd-signout-btn"
      type="button"
      class="mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      @click="signout"
    >
      Sign out
    </button>
  </div>
</template>

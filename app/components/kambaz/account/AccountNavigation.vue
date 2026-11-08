<script setup lang="ts">
import { useAccountContext } from '~/kambaz/account/AccountContext'

const route = useRoute()
const { currentUser } = useAccountContext()

const signedOutItems = [
  { label: 'Signin', href: '/account/signin', id: 'wd-account-signin-link' },
  { label: 'Signup', href: '/account/signup', id: 'wd-account-signup-link' },
]
const signedInItems = [
  { label: 'Profile', href: '/account/profile', id: 'wd-account-profile-link' },
]

// Signed in: only Profile. Signed out: only Signin and Signup.
const navigationItems = computed(() => (currentUser.value ? signedInItems : signedOutItems))

const isActiveLink = (href: string) => route.path === href || route.path.startsWith(`${href}/`)
</script>

<template>
  <div id="wd-account-navigation" class="wd list-group rounded-none text-lg">
    <NuxtLink v-for="item in navigationItems" :key="item.id" :to="item.href" :id="item.id" :class="isActiveLink(item.href) ? 'list-group-item active border-0' : 'list-group-item border-0 text-red-600'">
      {{ item.label }}
    </NuxtLink>
  </div>
</template>

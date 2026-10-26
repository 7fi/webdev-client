<script setup lang="ts">
import { AiOutlineDashboard } from 'vue3-icons/ai'
import { FaCircleQuestion, FaInbox, FaRegCircleUser } from 'vue3-icons/fa6'
import { IoCalendarOutline } from 'vue3-icons/io5'
import { LiaBookSolid, LiaCogSolid } from 'vue3-icons/lia'

const LINKS = [
  { label: 'Dashboard', path: '/dashboard', icon: AiOutlineDashboard },
  { label: 'Courses', path: '/dashboard', icon: LiaBookSolid },
  { label: 'Calendar', path: '/calendar', icon: IoCalendarOutline },
  { label: 'Inbox', path: '/inbox', icon: FaInbox },
  { label: 'Labs', path: '/labs', icon: LiaCogSolid },
  { label: 'History', path: '/history', icon: IoCalendarOutline },
] as const

const route = useRoute()
const accountActive = computed(() => route.path.includes('/account'))
const isActive = (link: (typeof LINKS)[number]) => (link.label === 'Courses' ? route.path.includes('/courses') : route.path.includes(link.path))
</script>

<template>
  <nav id="wd-kambaz-navigation" class="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block">
    <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer" class="block bg-black py-3 text-center">
      <img src="/images/NEU.png" width="75" height="75" alt="Northeastern University" class="mx-auto" />
    </a>
    <NuxtLink to="/account" id="wd-account-link" :class="['block py-3 text-center text-sm no-underline', accountActive ? 'bg-white text-red-600' : 'bg-black text-white']">
      <FaRegCircleUser :class="['inline-block text-3xl', accountActive ? 'text-red-600' : 'text-white']" />
      <br />
      Account
    </NuxtLink>
    <NuxtLink v-for="link in LINKS" :key="link.label" :to="link.path" :id="`wd-${link.label.toLowerCase()}-link`" :class="['block py-3 text-center text-sm no-underline', isActive(link) ? 'bg-white text-red-600' : 'bg-black text-white']">
      <component :is="link.icon" class="inline-block text-3xl text-red-500" />
      <br />
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

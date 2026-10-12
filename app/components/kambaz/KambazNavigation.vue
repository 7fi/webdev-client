<script setup lang="ts">
import { AiOutlineDashboard } from 'vue3-icons/ai'
import { FaInbox } from 'vue3-icons/fa'
import { FaCircleQuestion, FaRegCircleUser } from 'vue3-icons/fa6'
import { IoCalendarOutline } from 'vue3-icons/io5'
import { LiaBookSolid, LiaFlaskSolid } from 'vue3-icons/lia'
</script>

<template>
  <div id="wd-kambaz-navigation">
    <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer"> Northeastern </a>
    <br />
    <NuxtLink to="/account" id="wd-account-link"> Account </NuxtLink>
    <br />
    <NuxtLink to="/dashboard" id="wd-dashboard-link"> Dashboard </NuxtLink>
    <br />
    <NuxtLink to="/dashboard" id="wd-course-link"> Courses </NuxtLink>
    <br />
    <NuxtLink to="/calendar" id="wd-calendar-link"> Calendar </NuxtLink>
    <br />
    <NuxtLink to="/inbox" id="wd-inbox-link"> Inbox </NuxtLink>
    <br />
    <NuxtLink to="/labs" id="wd-labs-link"> Labs </NuxtLink>
    <br />
  </div>
  <nav id="wd-kambaz-navigation" class="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block">
    <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer" class="block bg-black py-3 text-center">
      <!-- /* eslint-disable-next-line @next/next/no-img-element */ -->
      <img src="/images/NEU.png" width="75" height="75" alt="Northeastern University" class="mx-auto" />
    </a>
    <NuxtLink to="/account" id="wd-account-link" class="block bg-black py-3 text-center text-sm text-white no-underline">
      <FaRegCircleUser class="inline-block text-3xl text-white" />
      <br />
      Account
    </NuxtLink>
    <NuxtLink to="/dashboard" id="wd-dashboard-link" class="block bg-white py-3 text-center text-sm text-red-600 no-underline">
      <AiOutlineDashboard class="inline-block text-3xl text-red-600" />
      <br />
      Dashboard
    </NuxtLink>
    <NuxtLink to="/dashboard" id="wd-course-link" class="block bg-black py-3 text-center text-sm text-white no-underline">
      <LiaBookSolid class="inline-block text-3xl text-red-600" />
      <br />
      Courses
    </NuxtLink>
    <NuxtLink to="/calendar" id="wd-calendar-link" class="block bg-black py-3 text-center text-sm text-white no-underline">
      <IoCalendarOutline class="inline-block text-3xl text-red-600" />
      <br />
      Calendar
    </NuxtLink>
    <NuxtLink to="/inbox" id="wd-inbox-link" class="block bg-black py-3 text-center text-sm text-white no-underline">
      <FaInbox class="inline-block text-3xl text-red-600" />
      <br />
      Inbox
    </NuxtLink>
    <NuxtLink to="/labs" id="wd-labs-link" class="block bg-black py-3 text-center text-sm text-white no-underline">
      <LiaFlaskSolid class="inline-block text-3xl text-red-600" />
      <br />
      Labs
    </NuxtLink>
    <NuxtLink to="/labs" id="wd-ai-nav-help" class="block bg-black py-3 text-center text-sm text-white no-underline">
      <FaCircleQuestion class="inline-block text-3xl text-red-600" />
      <br />
      Help
    </NuxtLink>
  </nav>
</template>

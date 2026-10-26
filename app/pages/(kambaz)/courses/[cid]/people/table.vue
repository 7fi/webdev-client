<script setup lang="ts">
import { FaUserCircle } from 'vue3-icons/fa'
import * as db from '~/kambaz/database'

definePageMeta({ layout: 'course' })

const route = useRoute()
const cid = computed(() => route.params.cid as string)
const { users, enrollments } = db
const enrolled = computed(() =>
  users.filter((usr) => enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid.value)),
)
</script>
<template>
  <div id="wd-people-table" class="overflow-x-auto">
    <table class="w-full border-collapse text-left text-sm">
      <thead>
        <tr class="border-b border-neutral-300">
          <th class="p-2">Name</th>
          <th class="p-2">Login ID</th>
          <th class="p-2">Section</th>
          <th class="p-2">Role</th>
          <th class="p-2">Last Activity</th>
          <th class="p-2">Total Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in enrolled" :key="user._id" class="odd:bg-neutral-50">
          <td class="wd-full-name p-2 text-nowrap">
            <FaUserCircle class="me-2 inline align-middle text-3xl text-neutral-500" />
            <span class="wd-first-name">{{ user.firstName }}</span> <span class="wd-last-name">{{ user.lastName }}</span>
          </td>
          <td class="wd-login-id p-2">{{ user.loginId }}</td>
          <td class="wd-section p-2">{{ user.section }}</td>
          <td class="wd-role p-2">{{ user.role }}</td>
          <td class="wd-last-activity p-2">{{ user.lastActivity }}</td>
          <td class="wd-total-activity p-2">{{ user.totalActivity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

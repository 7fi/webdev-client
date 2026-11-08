<script setup lang="ts">
import { FaUserCircle } from 'vue3-icons/fa'
import { emptyUser, useAccountContext, type User } from '~/kambaz/account/AccountContext'
import { useUsersStore } from '~/kambaz/store/usersStore'
import { useEnrollmentsStore } from '~/kambaz/store/enrollmentsStore'

definePageMeta({ layout: 'course' })

const route = useRoute()
const cid = computed(() => (typeof route.params.cid === 'string' ? route.params.cid : ''))

const usersStore = useUsersStore()
const enrollments = useEnrollmentsStore()
const enrolled = computed(() =>
  usersStore.users.filter((usr) => enrollments.isEnrolled(usr._id, cid.value)),
)

// Signed-in non-faculty can't add people; signed-out visitors can (see the Assignments list)
const { currentUser } = useAccountContext()
const isFaculty = computed(() => !currentUser.value || currentUser.value.role === 'FACULTY')

// The form starts from the shared emptyUser (always a copy, since v-model edits it)
const person = ref<User>({ ...emptyUser })

function addPerson() {
  if (!person.value.firstName.trim() && !person.value.lastName.trim()) return
  const created = usersStore.addUser(person.value)
  enrollments.enroll(created._id, cid.value)
  person.value = { ...emptyUser }
}
</script>
<template>
  <div id="wd-people-table" class="overflow-x-auto">
    <div v-if="isFaculty" id="wd-add-person" class="mb-3 flex flex-wrap items-center gap-2">
      <input
        id="wd-person-first-name"
        v-model="person.firstName"
        placeholder="First name"
        class="rounded border border-neutral-300 px-2 py-1 text-sm"
      />
      <input
        id="wd-person-last-name"
        v-model="person.lastName"
        placeholder="Last name"
        class="rounded border border-neutral-300 px-2 py-1 text-sm"
      />
      <input
        id="wd-person-login-id"
        v-model="person.loginId"
        placeholder="Login ID"
        class="rounded border border-neutral-300 px-2 py-1 text-sm"
      />
      <input
        id="wd-person-section"
        v-model="person.section"
        placeholder="Section"
        class="rounded border border-neutral-300 px-2 py-1 text-sm"
      />
      <select
        id="wd-person-role"
        v-model="person.role"
        class="rounded border border-neutral-300 bg-white px-2 py-1 text-sm"
      >
        <option value="STUDENT">Student</option>
        <option value="TA">Teaching Assistant</option>
        <option value="FACULTY">Faculty</option>
      </select>
      <button
        id="wd-add-person-click"
        type="button"
        class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        @click="addPerson"
      >
        + People
      </button>
    </div>
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

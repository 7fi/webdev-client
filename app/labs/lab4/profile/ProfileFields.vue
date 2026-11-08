<script setup lang="ts">
import {
  dateToHtml,
  htmlToDate,
  TOPICS,
  type Profile,
  type ProfileErrors,
  type Role,
} from './profile'

defineProps<{
  prefix: string
  errors: ProfileErrors
}>()

const profile = defineModel<Profile>('profile', { required: true })

const input = 'block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5'
const error = 'text-sm text-red-600'

function setProfile(changes: Partial<Profile>) {
  profile.value = { ...profile.value, ...changes }
}

function toggleTopic(topic: string) {
  const topics = profile.value.topics
  setProfile({
    topics: topics.includes(topic) ? topics.filter((t) => t !== topic) : [...topics, topic],
  })
}

const value = (e: Event) => (e.target as HTMLInputElement | HTMLSelectElement).value
</script>

<template>
  <div class="flex flex-col gap-3">
    <label :for="`${prefix}-first-name`">First name</label>
    <input
      :id="`${prefix}-first-name`"
      :class="input"
      :value="profile.firstName"
      @input="setProfile({ firstName: value($event) })"
    />
    <p v-if="errors.firstName" :class="error">{{ errors.firstName }}</p>

    <label :for="`${prefix}-last-name`">Last name</label>
    <input
      :id="`${prefix}-last-name`"
      :class="input"
      :value="profile.lastName"
      @input="setProfile({ lastName: value($event) })"
    />
    <p v-if="errors.lastName" :class="error">{{ errors.lastName }}</p>

    <label :for="`${prefix}-password`">Password</label>
    <input
      :id="`${prefix}-password`"
      type="password"
      :class="input"
      :value="profile.password"
      @input="setProfile({ password: value($event) })"
    />
    <p v-if="errors.password" :class="error">{{ errors.password }}</p>

    <label :for="`${prefix}-dob`">Date of birth</label>
    <input
      :id="`${prefix}-dob`"
      type="date"
      :class="input"
      :value="dateToHtml(profile.dob)"
      @input="setProfile({ dob: htmlToDate(value($event)) })"
    />
    <p v-if="errors.dob" :class="error">{{ errors.dob }}</p>

    <label :for="`${prefix}-role`">Role</label>
    <select
      :id="`${prefix}-role`"
      :class="input"
      :value="profile.role"
      @change="setProfile({ role: value($event) as Role })"
    >
      <option value="">Choose a role</option>
      <option value="STUDENT">Student</option>
      <option value="TA">Teaching assistant</option>
      <option value="FACULTY">Faculty</option>
    </select>
    <p v-if="errors.role" :class="error">{{ errors.role }}</p>

    <label class="flex items-center gap-2">
      <input
        :id="`${prefix}-newsletter`"
        type="checkbox"
        :checked="profile.newsletter"
        @change="setProfile({ newsletter: !profile.newsletter })"
      />
      Email me the newsletter
    </label>

    <fieldset :id="`${prefix}-topics`">
      <legend>Topics</legend>
      <label v-for="topic in TOPICS" :key="topic" class="mr-4 inline-flex items-center gap-1">
        <input
          type="checkbox"
          :checked="profile.topics.includes(topic)"
          @change="toggleTopic(topic)"
        />
        {{ topic }}
      </label>
    </fieldset>
    <p v-if="errors.topics" :class="error">{{ errors.topics }}</p>

    <fieldset :id="`${prefix}-theme`">
      <legend>Theme</legend>
      <label class="mr-4 inline-flex items-center gap-1">
        <input
          type="radio"
          :name="`${prefix}-theme`"
          :checked="profile.theme === 'light'"
          @change="setProfile({ theme: 'light' })"
        />
        Light
      </label>
      <label class="inline-flex items-center gap-1">
        <input
          type="radio"
          :name="`${prefix}-theme`"
          :checked="profile.theme === 'dark'"
          @change="setProfile({ theme: 'dark' })"
        />
        Dark
      </label>
    </fieldset>
  </div>
</template>

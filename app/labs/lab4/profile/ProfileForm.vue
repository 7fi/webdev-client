<script setup lang="ts">
import { ref } from 'vue'
import { emptyProfile, validateProfile, type Profile, type ProfileErrors } from './profile'
import ProfileFields from './ProfileFields.vue'
import ProfileAlert from './ProfileAlert.vue'

const profile = ref<Profile>({ ...emptyProfile })
const errors = ref<ProfileErrors>({})
const submitted = ref(false)

function save() {
  errors.value = validateProfile(profile.value)
  submitted.value = true
}
</script>

<template>
  <form id="wd-profile-form" novalidate @submit.prevent="save">
    <h2>Profile</h2>
    <ProfileAlert id="wd-profile-alert" :submitted="submitted" :errors="errors" />
    <ProfileFields v-model:profile="profile" prefix="wd-profile" :errors="errors" />
    <button
      id="wd-profile-save"
      type="submit"
      class="mt-3 rounded bg-blue-600 px-4 py-1.5 text-white"
    >
      Save
    </button>
    <pre>{{ JSON.stringify(profile, null, 2) }}</pre>
  </form>
</template>

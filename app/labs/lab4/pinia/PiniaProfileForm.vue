<script setup lang="ts">
import { ref } from 'vue'
import { useProfileStore } from './profileStore'
import { validateProfile, type ProfileErrors } from '../profile/profile'
import ProfileFields from '../profile/ProfileFields.vue'
import ProfileAlert from '../profile/ProfileAlert.vue'

// profile lives in the store; errors and submitted stay local, as in ProfileForm
const store = useProfileStore()
const errors = ref<ProfileErrors>({})
const submitted = ref(false)

function save() {
  errors.value = validateProfile(store.profile)
  submitted.value = true
}
</script>

<template>
  <form id="wd-zustand-profile-form" novalidate @submit.prevent="save">
    <h2>Profile (Pinia)</h2>
    <ProfileAlert id="wd-zustand-profile-alert" :submitted="submitted" :errors="errors" />
    <ProfileFields
      prefix="wd-zustand-profile"
      :profile="store.profile"
      :errors="errors"
      @update:profile="store.setProfile"
    />
    <button
      id="wd-zustand-profile-save"
      type="submit"
      class="mt-3 rounded bg-blue-600 px-4 py-1.5 text-white"
    >
      Save
    </button>
    <pre>{{ JSON.stringify(store.profile, null, 2) }}</pre>
  </form>
</template>

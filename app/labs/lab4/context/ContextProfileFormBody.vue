<script setup lang="ts">
import { ref } from 'vue'
import { useProfileContext } from './ProfileContext'
import { validateProfile, type ProfileErrors } from '../profile/profile'
import ProfileFields from '../profile/ProfileFields.vue'
import ProfileAlert from '../profile/ProfileAlert.vue'

// profile comes from the context; errors and submitted stay local, as in ProfileForm
const { profile, setProfile } = useProfileContext()
const errors = ref<ProfileErrors>({})
const submitted = ref(false)

function save() {
  errors.value = validateProfile(profile.value)
  submitted.value = true
}
</script>

<template>
  <form id="wd-context-profile-form" novalidate @submit.prevent="save">
    <h2>Profile (Vue Provide / Inject)</h2>
    <ProfileAlert id="wd-context-profile-alert" :submitted="submitted" :errors="errors" />
    <ProfileFields
      prefix="wd-context-profile"
      :profile="profile"
      :errors="errors"
      @update:profile="setProfile"
    />
    <button
      id="wd-context-profile-save"
      type="submit"
      class="mt-3 rounded bg-blue-600 px-4 py-1.5 text-white"
    >
      Save
    </button>
    <pre>{{ JSON.stringify(profile, null, 2) }}</pre>
  </form>
</template>

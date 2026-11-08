import { defineStore } from 'pinia'
import { ref } from 'vue'
import { emptyProfile, type Profile } from '../profile/profile'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>({ ...emptyProfile })
  const setProfile = (p: Profile) => {
    profile.value = p
  }
  return { profile, setProfile }
})

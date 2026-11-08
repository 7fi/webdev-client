import { defineComponent, inject, provide, ref, type InjectionKey, type Ref } from 'vue'
import { emptyProfile, type Profile } from '../profile/profile'

export type ProfileContextValue = {
  profile: Ref<Profile>
  setProfile: (profile: Profile) => void
}

const ProfileKey: InjectionKey<ProfileContextValue> = Symbol('ProfileContext')

export const ProfileProvider = defineComponent({
  name: 'ProfileProvider',
  setup(_, { slots }) {
    const profile = ref<Profile>({ ...emptyProfile })
    const setProfile = (p: Profile) => {
      profile.value = p
    }
    provide(ProfileKey, { profile, setProfile })
    return () => slots.default?.()
  },
})

export function useProfileContext() {
  const value = inject(ProfileKey, null)
  if (!value) {
    throw new Error('useProfileContext must be used inside ProfileProvider')
  }
  return value
}

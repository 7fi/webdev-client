import { defineComponent, inject, provide, ref, type InjectionKey, type Ref } from 'vue'
import usersJson from '../database/users.json'

export type User = (typeof usersJson)[number]

// Shared blank user: the starting draft for adding a person (and for Sign up)
export const emptyUser: User = {
  _id: '',
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  role: 'STUDENT',
  loginId: '',
  section: '',
  lastActivity: '',
  totalActivity: '',
}

export type AccountContextValue = {
  currentUser: Ref<User | null>
  setCurrentUser: (user: User | null) => void
}

const AccountKey: InjectionKey<AccountContextValue> = Symbol('AccountContext')

export const AccountProvider = defineComponent({
  name: 'AccountProvider',
  setup(_, { slots }) {
    // null until someone signs in; setCurrentUser is the only writer
    const currentUser = ref<User | null>(null)
    const setCurrentUser = (user: User | null) => {
      currentUser.value = user
    }
    provide(AccountKey, { currentUser, setCurrentUser })
    return () => slots.default?.()
  },
})

export function useAccountContext() {
  const value = inject(AccountKey, null)
  if (!value) {
    throw new Error('useAccountContext must be used inside AccountProvider')
  }
  return value
}

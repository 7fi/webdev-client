import { defineStore } from 'pinia'
import { ref } from 'vue'
import usersJson from '../database/users.json'
import type { User } from '../account/AccountContext'

// People added from the People table live here, so they survive navigating away
// (their enrollments live in the enrollments store)
export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>(usersJson.map((u) => ({ ...u })))

  const addUser = (user: User) => {
    const created = { ...user, _id: crypto.randomUUID() }
    users.value = [...users.value, created]
    return created
  }

  return { users, addUser }
})

import axios from 'axios'
import type { User } from './AccountContext'

// Lives outside pages/: any .ts file under pages/ would become a route.
// Sends the session cookie (connect.sid) with every request; plain axios would leave it behind
const axiosWithCredentials = axios.create({ withCredentials: true })
// Read inside each function: Nuxt composables only work inside a component's setup or a request
const usersApi = () => `${useRuntimeConfig().public.httpServer}/api/users`

// 401 (wrong credentials) rejects; callers catch it
export const signin = async (credentials: { username: string; password: string }): Promise<User> => {
  const response = await axiosWithCredentials.post(`${usersApi()}/signin`, credentials)
  return response.data
}
export const signup = async (user: Partial<User> & { username: string; password: string }): Promise<User> => {
  const response = await axiosWithCredentials.post(`${usersApi()}/signup`, user)
  return response.data
}
export const updateUser = async (user: User): Promise<User> => {
  const response = await axiosWithCredentials.put(`${usersApi()}/${user._id}`, user)
  return response.data
}
// The session's user; 401 (no session) rejects
export const profile = async (): Promise<User> => {
  // A sleeping Render server can take most of a minute to wake; give up sooner so pages still render
  const response = await axiosWithCredentials.get(`${usersApi()}/profile`, { timeout: 10000 })
  return response.data
}
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${usersApi()}/signout`)
  return response.data
}

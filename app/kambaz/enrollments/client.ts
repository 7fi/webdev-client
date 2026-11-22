import axios from 'axios'
import type { Enrollment } from '~/kambaz/store/enrollmentsStore'

// Lives outside pages/: any .ts file under pages/ would become a route.
// Credentials so a userId of "current" resolves to the session's user
const axiosWithCredentials = axios.create({ withCredentials: true })
// Read inside each function: Nuxt composables only work inside a component's setup or a request
const httpServer = () => useRuntimeConfig().public.httpServer
const usersApi = () => `${httpServer()}/api/users`

export const fetchEnrollments = async (): Promise<Enrollment[]> => {
  const { data } = await axios.get(`${httpServer()}/api/enrollments`)
  return data
}
// Returns the enrollment the server stored
export const enrollIntoCourse = async (userId: string, courseId: string): Promise<Enrollment> => {
  const { data } = await axiosWithCredentials.post(`${usersApi()}/${userId}/courses/${courseId}`)
  return data
}
export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.delete(`${usersApi()}/${userId}/courses/${courseId}`)
  return data
}

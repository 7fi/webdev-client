import axios from 'axios'
import type { Course } from '~/kambaz/store/coursesStore'
import type { CourseModule } from '~/kambaz/store/modulesStore'
import type { Assignment } from '~/kambaz/store/assignmentsStore'

// Lives outside pages/: any .ts file under pages/ would become a route.
// Sends the session cookie, so /api/users/current/... knows who is signed in
const axiosWithCredentials = axios.create({ withCredentials: true })
// Read inside each function: Nuxt composables only work inside a component's setup or a request
const httpServer = () => useRuntimeConfig().public.httpServer
const coursesApi = () => `${httpServer()}/api/courses`
const usersApi = () => `${httpServer()}/api/users`

export const fetchAllCourses = async (): Promise<Course[]> => {
  const { data } = await axios.get(coursesApi())
  return data
}
// The signed-in user's enrolled courses; 401 if no session
export const findMyCourses = async (): Promise<Course[]> => {
  const { data } = await axiosWithCredentials.get(`${usersApi()}/current/courses`)
  return data
}
// The server assigns _id and enrolls the signed-in user (if any) in the new course
export const createCourse = async (course: Omit<Course, '_id'>): Promise<Course> => {
  const { data } = await axiosWithCredentials.post(`${usersApi()}/current/courses`, course)
  return data
}
export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${coursesApi()}/${courseId}`)
  return data
}
export const updateCourse = async (course: Course): Promise<Course> => {
  const { data } = await axios.put(`${coursesApi()}/${course._id}`, course)
  return data
}

// Modules: listed and created under their course, changed and deleted by their own id
const modulesApi = () => `${httpServer()}/api/modules`
export const findModulesForCourse = async (courseId: string): Promise<CourseModule[]> => {
  const response = await axios.get(`${coursesApi()}/${courseId}/modules`)
  return response.data
}
export const createModuleForCourse = async (courseId: string, module: Partial<CourseModule>): Promise<CourseModule> => {
  const response = await axios.post(`${coursesApi()}/${courseId}/modules`, module)
  return response.data
}
export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${modulesApi()}/${moduleId}`)
  return response.data
}
export const updateModule = async (module: CourseModule): Promise<CourseModule> => {
  const { data } = await axios.put(`${modulesApi()}/${module._id}`, module)
  return data
}

// Assignments: same shape as modules
const assignmentsApi = () => `${httpServer()}/api/assignments`
export const findAssignmentsForCourse = async (courseId: string): Promise<Assignment[]> => {
  const { data } = await axios.get(`${coursesApi()}/${courseId}/assignments`)
  return data
}
export const createAssignmentForCourse = async (courseId: string, assignment: Partial<Assignment>): Promise<Assignment> => {
  const { data } = await axios.post(`${coursesApi()}/${courseId}/assignments`, assignment)
  return data
}
export const updateAssignment = async (assignment: Assignment): Promise<Assignment> => {
  const { data } = await axios.put(`${assignmentsApi()}/${assignment._id}`, assignment)
  return data
}
export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(`${assignmentsApi()}/${assignmentId}`)
  return data
}

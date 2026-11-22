import { defineStore } from 'pinia'
import { ref } from 'vue'

// Courses live on the Express server; this store is only a client cache of what it returned
export type Course = {
  _id: string
  name: string
  number: string
  startDate: string
  endDate: string
  term: string
  department: string
  credits: number
  description: string
  image: string
}

export const emptyCourse: Course = {
  _id: '0',
  name: 'New Course',
  number: 'New Number',
  startDate: '2023-09-10',
  endDate: '2023-12-15',
  term: 'Fall 2023',
  department: 'D123',
  credits: 4,
  description: 'New Description',
  image: '/images/reactjs.jpg',
}

export const useCoursesStore = defineStore('courses', () => {
  // Empty until a fetch fills it
  const courses = ref<Course[]>([])

  // Replaces the cache with what the server returned
  const setCourses = (list: Course[]) => {
    courses.value = list
  }
  // Appends a course the server already created (it assigned the _id)
  const addCourse = (course: Course) => {
    courses.value = [...courses.value, course]
  }
  const deleteCourse = (courseId: string) => {
    courses.value = courses.value.filter((course) => course._id !== courseId)
  }
  const updateCourse = (course: Course) => {
    courses.value = courses.value.map((c) => (c._id === course._id ? { ...course } : c))
  }

  return { courses, setCourses, addCourse, deleteCourse, updateCourse }
})

import { defineStore } from 'pinia'
import { ref } from 'vue'
import coursesJson from '../database/courses.json'

export type Course = (typeof coursesJson)[number]

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
  // Copy the seed so edits never touch the imported JSON module
  const courses = ref<Course[]>(coursesJson.map((c) => ({ ...c })))

  // Returns the new course so the caller can use its _id (e.g. to enroll its creator)
  const addCourse = (course: Course) => {
    const created = { ...emptyCourse, ...course, _id: crypto.randomUUID() }
    courses.value = [...courses.value, created]
    return created
  }
  const deleteCourse = (courseId: string) => {
    courses.value = courses.value.filter((course) => course._id !== courseId)
  }
  const updateCourse = (course: Course) => {
    courses.value = courses.value.map((c) => (c._id === course._id ? { ...course } : c))
  }

  return { courses, addCourse, deleteCourse, updateCourse }
})

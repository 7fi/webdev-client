import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Enrollment = { _id: string; user: string; course: string }

// Enrollments live on the Express server; this store caches all of them
export const useEnrollmentsStore = defineStore('enrollments', () => {
  const enrollments = ref<Enrollment[]>([])
  // False until the first fetch, so access checks can wait instead of treating "empty" as "not enrolled"
  const loaded = ref(false)

  // Replaces the cache with what the server returned
  const setEnrollments = (list: Enrollment[]) => {
    enrollments.value = list
    loaded.value = true
  }

  const isEnrolled = (userId: string, courseId: string) =>
    enrollments.value.some((e) => e.user === userId && e.course === courseId)

  // Appends an enrollment the server already stored (it assigned the _id)
  const addEnrollment = (enrollment: Enrollment) => {
    if (isEnrolled(enrollment.user, enrollment.course)) return
    enrollments.value = [...enrollments.value, enrollment]
  }
  const removeEnrollment = (userId: string, courseId: string) => {
    enrollments.value = enrollments.value.filter(
      (e) => !(e.user === userId && e.course === courseId),
    )
  }

  return { enrollments, loaded, setEnrollments, isEnrolled, addEnrollment, removeEnrollment }
})

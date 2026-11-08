import { defineStore } from 'pinia'
import { ref } from 'vue'
import enrollmentsJson from '../database/enrollments.json'

export type Enrollment = (typeof enrollmentsJson)[number]

// Lives for the browser session: survives sign out / sign in, lost on a full reload
export const useEnrollmentsStore = defineStore('enrollments', () => {
  // Copy the seed so changes never touch the imported JSON module
  const enrollments = ref<Enrollment[]>(enrollmentsJson.map((e) => ({ ...e })))

  const isEnrolled = (userId: string, courseId: string) =>
    enrollments.value.some((e) => e.user === userId && e.course === courseId)

  const enroll = (userId: string, courseId: string) => {
    if (isEnrolled(userId, courseId)) return
    enrollments.value = [
      ...enrollments.value,
      { _id: crypto.randomUUID(), user: userId, course: courseId },
    ]
  }
  const unenroll = (userId: string, courseId: string) => {
    enrollments.value = enrollments.value.filter(
      (e) => !(e.user === userId && e.course === courseId),
    )
  }

  return { enrollments, isEnrolled, enroll, unenroll }
})

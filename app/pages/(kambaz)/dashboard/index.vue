<script setup lang="ts">
definePageMeta({ layout: 'kambaz' })
import { ref } from 'vue'
import CourseCard from '~/components/kambaz/dashboard/CourseCard.vue'
import * as client from '~/kambaz/courses/client'
import * as enrollmentsClient from '~/kambaz/enrollments/client'
import { emptyCourse, useCoursesStore, type Course } from '~/kambaz/store/coursesStore'
import { useAccountContext } from '~/kambaz/account/AccountContext'
import { useEnrollmentsStore } from '~/kambaz/store/enrollmentsStore'

// The server is the source of truth; the store is a cache of what it last returned
const store = useCoursesStore()
const enrollments = useEnrollmentsStore()
const { currentUser } = useAccountContext()

// Enrollments button: false = only my courses, true = every course
const showAllCourses = ref(false)

// Signed in: the server filters to my enrolled courses (or all, with the toggle).
// Signed out: every course, so direct visits (including the autograder's) still see the list.
const loadCourses = async () => {
  const user = currentUser.value
  try {
    store.setCourses(user && !showAllCourses.value ? await client.findMyCourses() : await client.fetchAllCourses())
  } catch {
    store.setCourses([])
  }
}
// The cards' Enroll/Unenroll and Go state read the enrollments cache
const loadEnrollments = async () => {
  try {
    enrollments.setEnrollments(await enrollmentsClient.fetchEnrollments())
  } catch {
    // Server unreachable: keep the cache as it was rather than mark it loaded-but-empty
  }
}
onMounted(loadEnrollments)
onMounted(loadCourses)
// A different user signing in, or flipping the toggle, reloads from the server
watch([currentUser, showAllCourses], loadCourses)

const onAddCourse = async () => {
  const { _id, ...newCourse } = course.value
  const created = await client.createCourse(newCourse)
  store.addCourse(created)
  // The server enrolled the creator; refresh the cache so the new card shows as enrolled
  if (currentUser.value) await loadEnrollments()
}
const onUpdateCourse = async () => {
  const saved = await client.updateCourse(course.value)
  store.updateCourse(saved)
}
const onDeleteCourse = async (courseId: string) => {
  await client.deleteCourse(courseId)
  store.deleteCourse(courseId)
}
const onToggleEnrollment = async (courseId: string) => {
  const user = currentUser.value
  if (!user) return
  if (enrollments.isEnrolled(user._id, courseId)) {
    await enrollmentsClient.unenrollFromCourse(user._id, courseId)
    enrollments.removeEnrollment(user._id, courseId)
    // "My courses" shows only enrolled courses, so drop it from that list
    if (!showAllCourses.value) store.deleteCourse(courseId)
  } else {
    enrollments.addEnrollment(await enrollmentsClient.enrollIntoCourse(user._id, courseId))
  }
}

// The form draft is one-screen UI state, so it stays local.
// Always a copy: v-model edits this object, and it must never be emptyCourse or a store course.
const course = ref<Course>({ ...emptyCourse })
const edit = (c: Course) => {
  course.value = { ...c }
}

// Spread update, same shape as React's setCourse({ ...course, field: value })
const setField = (field: 'number' | 'startDate', e: Event) => {
  course.value = { ...course.value, [field]: (e.target as HTMLInputElement).value }
}
</script>

<template>
  <div id="wd-dashboard">
    <div class="flex items-center justify-between gap-2">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <button
        v-if="currentUser"
        id="wd-enrollments-toggle"
        type="button"
        class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        :aria-pressed="showAllCourses"
        @click="showAllCourses = !showAllCourses"
      >
        Enrollments
      </button>
    </div>
    <hr />
    <h5 class="flex flex-wrap items-center gap-2">
      New Course
      <button
        id="wd-add-new-course-click"
        type="button"
        class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        @click="onAddCourse"
      >
        Add
      </button>
      <button
        id="wd-update-course-click"
        type="button"
        class="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
        @click="onUpdateCourse"
      >
        Update
      </button>
    </h5>
    <input
      id="wd-course-name"
      v-model="course.name"
      class="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
    />
    <textarea
      id="wd-course-description"
      v-model="course.description"
      rows="3"
      class="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
    />
    <input
      id="wd-course-number"
      :value="course.number"
      class="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
      @input="setField('number', $event)"
    />
    <input
      id="wd-course-start-date"
      type="date"
      :value="course.startDate"
      class="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
      @input="setField('startDate', $event)"
    />
    <hr />
    <h2 id="wd-dashboard-published">Published Courses ({{ store.courses.length }})</h2>
    <hr />
    <div
      id="wd-dashboard-courses"
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      <CourseCard v-for="c in store.courses" :key="c._id" :course="c" @edit="edit(c)" @delete="onDeleteCourse(c._id)" @toggle-enrollment="onToggleEnrollment(c._id)" />
    </div>
  </div>
</template>

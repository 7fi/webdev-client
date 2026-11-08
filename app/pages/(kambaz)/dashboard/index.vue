<script setup lang="ts">
definePageMeta({ layout: 'kambaz' })
import { ref } from 'vue'
import CourseCard from '~/components/kambaz/dashboard/CourseCard.vue'
import { emptyCourse, useCoursesStore, type Course } from '~/kambaz/store/coursesStore'
import { useAccountContext } from '~/kambaz/account/AccountContext'
import { useEnrollmentsStore } from '~/kambaz/store/enrollmentsStore'

// Published list comes from the store
const store = useCoursesStore()
const enrollments = useEnrollmentsStore()
const { currentUser } = useAccountContext()

// Enrollments button: false = only my courses, true = every course
const showAllCourses = ref(false)

// Nobody signed in or showing all: every course. Otherwise only enrolled courses.
const visibleCourses = computed(() => {
  const user = currentUser.value
  if (!user || showAllCourses.value) return store.courses
  return store.courses.filter((c) => enrollments.isEnrolled(user._id, c._id))
})

// A new course enrolls its creator, so it shows up in "my courses" and can be opened
function addCourse() {
  const created = store.addCourse(course.value)
  if (currentUser.value) enrollments.enroll(currentUser.value._id, created._id)
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
        @click="addCourse"
      >
        Add
      </button>
      <button
        id="wd-update-course-click"
        type="button"
        class="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
        @click="store.updateCourse(course)"
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
    <h2 id="wd-dashboard-published">Published Courses ({{ visibleCourses.length }})</h2>
    <hr />
    <div
      id="wd-dashboard-courses"
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      <CourseCard v-for="c in visibleCourses" :key="c._id" :course="c" @edit="edit(c)" />
    </div>
  </div>
</template>

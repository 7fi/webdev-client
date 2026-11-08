<script setup lang="ts">
import { FaAlignJustify } from 'vue3-icons/fa6'
import CourseNavigation from '~/components/kambaz/CourseNavigation.vue'
import Breadcrumb from '~/components/kambaz/course/Breadcrumb.vue'
import { useCoursesStore } from '~/kambaz/store/coursesStore'
import { useEnrollmentsStore } from '~/kambaz/store/enrollmentsStore'
import { useAccountContext } from '~/kambaz/account/AccountContext'

const route = useRoute()
// Route params can be a string or an array; normalize before looking up the course
const cid = computed(() => (typeof route.params.cid === 'string' ? route.params.cid : ''))

// Look the course up in the store, so courses added on the Dashboard have a name here too
const store = useCoursesStore()
const course = computed(() => store.courses.find((c) => c._id === cid.value))

// Sidebar visibility is local to this layout, so it stays out of the store
const showCourseNav = ref(true)

// Route protection: a signed-in user who isn't enrolled goes back to the Dashboard.
// Signed-out visitors are let through: the server never has a signed-in user (the account
// lives in browser memory), so blocking them would redirect every direct visit or refresh
// of a course URL — including the autograder's.
const { currentUser } = useAccountContext()
const enrollments = useEnrollmentsStore()
const allowed = computed(
  () => !currentUser.value || enrollments.isEnrolled(currentUser.value._id, cid.value),
)
watchEffect(() => {
  if (!allowed.value) navigateTo('/dashboard', { replace: true })
})
</script>

<template>
  <NuxtLayout name="kambaz">
    <div v-if="allowed" id="wd-courses">
      <h2 class="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          class="me-4 mb-1 inline cursor-pointer text-xl"
          title="Toggle course navigation"
          @click="showCourseNav = !showCourseNav"
        />
        <Breadcrumb :course="course" />
        <span class="ms-2 text-sm">({{ course?._id }})</span>
      </h2>
      <hr class="my-3" />
      <div class="flex gap-4">
        <div v-if="showCourseNav" class="hidden w-[140px] shrink-0 md:block">
          <CourseNavigation :cid="cid" />
        </div>
        <div class="min-w-0 flex-1"><slot /></div>
      </div>
    </div>
  </NuxtLayout>
</template>

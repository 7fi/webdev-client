<script setup lang="ts">
import { useCoursesStore, type Course } from '~/kambaz/store/coursesStore'
import { useEnrollmentsStore } from '~/kambaz/store/enrollmentsStore'
import { useAccountContext } from '~/kambaz/account/AccountContext'

const props = defineProps<{ course: Course }>()

// Edit fills the Dashboard's local draft, so it goes up as an event (Vue's onEdit prop)
const emit = defineEmits<{ edit: [] }>()

// Delete and enrollment go straight to the stores, so Dashboard doesn't pass them as props
const store = useCoursesStore()
const enrollments = useEnrollmentsStore()
const { currentUser } = useAccountContext()

const enrolled = computed(
  () => !!currentUser.value && enrollments.isEnrolled(currentUser.value._id, props.course._id),
)

function toggleEnrollment() {
  if (!currentUser.value) return
  if (enrolled.value) enrollments.unenroll(currentUser.value._id, props.course._id)
  else enrollments.enroll(currentUser.value._id, props.course._id)
}

// Same rule as the course layout: signed-out visitors can open any course,
// a signed-in user only the ones they're enrolled in
const canOpen = computed(() => !currentUser.value || enrolled.value)

// Runs before the NuxtLink's own click handler, so preventDefault stops the navigation
function guardNavigation(event: MouseEvent) {
  if (!canOpen.value) event.preventDefault()
}
</script>

<template>
  <div class="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
    <NuxtLink
      :to="`/courses/${course._id}/home`"
      class="wd-dashboard-course-link block text-neutral-900 no-underline"
      :class="{ 'cursor-default': !canOpen }"
    >
      <div @click="guardNavigation">
        <NuxtImg :src="course.image" width="300" height="160" :alt="course.name" class="h-40 w-full object-cover" />
        <div class="p-4">
          <h5 class="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">{{ course.name }}</h5>
          <p class="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">{{ course.description }}</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-if="canOpen"
              type="button"
              class="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Go
            </button>
            <!-- .prevent stops the surrounding NuxtLink from navigating to the course -->
            <button
              id="wd-edit-course-click"
              type="button"
              class="inline-flex items-center justify-center rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
              @click.prevent="emit('edit')"
            >
              Edit
            </button>
            <button
              id="wd-delete-course-click"
              type="button"
              class="inline-flex items-center justify-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
              @click.prevent="store.deleteCourse(course._id)"
            >
              Delete
            </button>
            <template v-if="currentUser">
              <button
                v-if="enrolled"
                id="wd-unenroll-course-click"
                type="button"
                class="inline-flex items-center justify-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                @click.prevent="toggleEnrollment"
              >
                Unenroll
              </button>
              <button
                v-else
                id="wd-enroll-course-click"
                type="button"
                class="inline-flex items-center justify-center rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
                @click.prevent="toggleEnrollment"
              >
                Enroll
              </button>
            </template>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

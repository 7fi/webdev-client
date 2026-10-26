<script setup lang="ts">
const { cid } = defineProps<{ cid: string }>()

const LINKS = [
  { segment: 'home', id: 'wd-course-home-link', label: 'Home' },
  { segment: 'modules', id: 'wd-course-modules-link', label: 'Modules' },
  { segment: 'piazza', id: 'wd-course-piazza-link', label: 'Piazza' },
  { segment: 'zoom', id: 'wd-course-zoom-link', label: 'Zoom' },
  { segment: 'assignments', id: 'wd-course-assignments-link', label: 'Assignments' },
  { segment: 'quizzes', id: 'wd-course-quizzes-link', label: 'Quizzes' },
  { segment: 'grades', id: 'wd-course-grades-link', label: 'Grades' },
  { segment: 'people/table', id: 'wd-course-people-link', label: 'People' },
  { segment: 'announcements', id: 'wd-course-announcements-link', label: 'Announcements' },
] as const

const route = useRoute()
const inCourse = computed(() => route.path.startsWith(`/courses/${cid}`))
const hrefFor = (segment: string) => `/courses/${cid}/${segment}`
const isActive = (segment: string) => {
  const href = hrefFor(segment)
  return inCourse.value ? route.path === href || (segment !== 'home' && route.path.startsWith(href)) : segment === 'home'
}
</script>

<template>
  <div id="wd-courses-navigation" class="wd list-group rounded-none text-lg">
    <NuxtLink
      v-for="{ segment, id, label } in LINKS"
      :key="id"
      :to="hrefFor(segment)"
      :id="id"
      :class="isActive(segment) ? 'list-group-item active border-0' : 'list-group-item border-0 text-red-600'"
    >
      {{ label }}
    </NuxtLink>
    <NuxtLink :to="hrefFor('home')" id="wd-course-ai-link" class="list-group-item border-0 text-red-600">Sample</NuxtLink>
  </div>
</template>

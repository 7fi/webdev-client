<script setup lang="ts">
const props = defineProps<{
  cid: string
}>()

const route = useRoute()
const basePath = `/courses/${props.cid}`

const navigationItems = [
  { label: 'Home', href: `${basePath}/home`, id: 'wd-course-home-link' },
  { label: 'Modules', href: `${basePath}/modules`, id: 'wd-course-modules-link' },
  { label: 'Piazza', href: `${basePath}/piazza`, id: 'wd-course-piazza-link' },
  { label: 'Zoom', href: `${basePath}/zoom`, id: 'wd-course-zoom-link' },
  { label: 'Assignments', href: `${basePath}/assignments`, id: 'wd-course-assignments-link' },
  { label: 'Quizzes', href: `${basePath}/quizzes`, id: 'wd-course-quizzes-link' },
  { label: 'Grades', href: `${basePath}/grades`, id: 'wd-course-grades-link' },
  { label: 'People', href: `${basePath}/people/table`, id: 'wd-course-people-link' },
  { label: 'Sample', href: `${basePath}/home`, id: 'wd-course-ai-link' },
]

const isActiveLink = (href: string) => route.path === href || route.path.startsWith(`${href}/`)
</script>

<template>
  <div id="wd-courses-navigation" class="wd list-group rounded-none text-lg">
    <NuxtLink v-for="item in navigationItems" :key="item.id" :to="item.href" :id="item.id" :class="isActiveLink(item.href) ? 'list-group-item active border-0' : 'list-group-item border-0 text-red-600'">
      {{ item.label }}
    </NuxtLink>
  </div>
</template>

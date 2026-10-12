<script setup lang="ts">
defineProps<{
  id: string
  title: string
  subtitle: string
  image: string
}>()
</script>

<template>
  <div class="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
    <NuxtLink :to="`/courses/${id}/home`" class="wd-dashboard-course-link block text-neutral-900 no-underline">
      <NuxtImg :src="image" width="300" height="160" :alt="title" class="h-40 w-full object-cover" />
      <div class="p-4">
        <h5 class="m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">{{ title }}</h5>
        <p class="wd-dashboard-course-title m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">{{ subtitle }}</p>
        <button type="button" class="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">Go</button>
      </div>
    </NuxtLink>
  </div>
</template>

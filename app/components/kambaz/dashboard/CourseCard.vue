<script setup lang="ts">
defineProps<{
  id: string
  title: string
  subtitle: string
  image: string
}>()
</script>

<template>
  <div className="wd-dashboard-course">
    <NuxtLink :to="`/courses/${id}/home`" class="wd-dashboard-course-link">
      <NuxtImg :src="image" width="200" height="150" :alt="title" />
      <div>
        <h5>{{ title }}</h5>
        <p className="wd-dashboard-course-title">{{ subtitle }}</p>
        <button type="button">Go</button>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'kambaz' })
import CourseCard from '~/components/kambaz/dashboard/CourseCard.vue'
import * as db from '~/kambaz/database'

const courses = db.courses
</script>

<template>
  <div id="wd-dashboard">
    <h1 id="wd-dashboard-title">Dashboard</h1>
    <hr />
    <h2 id="wd-dashboard-published">Published Courses ({{ courses.length }})</h2>
    <hr />
    <div id="wd-dashboard-courses" class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <CourseCard v-for="course in courses" :key="course._id" v-bind="course" />
    </div>
  </div>
</template>

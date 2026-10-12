<script setup lang="ts">
definePageMeta({ layout: 'kambaz' })
import CourseCard from '~/components/kambaz/dashboard/CourseCard.vue'
</script>

<template>
  <div id="wd-dashboard">
    <h1 id="wd-dashboard-title">Dashboard</h1>
    <hr />
    <h2 id="wd-dashboard-published">Published Courses (3)</h2>
    <hr />
    <div id="wd-dashboard-courses" class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <CourseCard id="1234" title="CS1234 React JS" subtitle="Full Stack software developer" image="/images/reactjs.jpg" />
      <CourseCard id="2345" title="CS2345 Node JS" subtitle="Server side JavaScript and API usage" image="/images/nodejs.jpg" />
      <CourseCard id="3456" title="CS3456 MongoDB" subtitle="NoSQL Databases" image="/images/mongodb.jpg" />
      <CourseCard id="CS9999" title="CS9999 Sample Course" subtitle="Assistant-generated sample — not my course" image="/images/reactjs.jpg" />
    </div>
  </div>
</template>

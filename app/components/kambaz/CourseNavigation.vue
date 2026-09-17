<script setup lang="ts">
defineProps<{
  cid: string
}>()
</script>
<template>
  <div id="wd-courses-navigation">
    <NuxtLink :to="`/courses/${cid}/home`" id="wd-course-home-link"> Home </NuxtLink>
    <br />
    <NuxtLink :to="`/courses/${cid}/modules`" id="wd-course-modules-link"> Modules </NuxtLink>
    <br />
    <NuxtLink :to="`/courses/${cid}/piazza`" id="wd-course-piazza-link"> Piazza </NuxtLink>
    <br />
    <NuxtLink :to="`/courses/${cid}/zoom`" id="wd-course-zoom-link"> Zoom </NuxtLink>
    <br />
    <NuxtLink :to="`/courses/${cid}/assignments`" id="wd-course-assignments-link"> Assignments </NuxtLink>
    <br />
    <NuxtLink :to="`/courses/${cid}/quizzes`" id="wd-course-quizzes-link"> Quizzes </NuxtLink>
    <br />
    <NuxtLink :to="`/courses/${cid}/grades`" id="wd-course-grades-link"> Grades </NuxtLink>
    <br />
    <NuxtLink :to="`/courses/${cid}/people/table`" id="wd-course-people-link"> People </NuxtLink>
    <br />
  </div>
</template>

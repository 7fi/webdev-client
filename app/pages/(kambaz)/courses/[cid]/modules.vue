<script setup lang="ts">
import Lesson from '~/components/kambaz/course/Lesson.vue'
import Module from '~/components/kambaz/course/Module.vue'

definePageMeta({ layout: 'course' })
</script>

<template>
  <div>
    <div class="mb-3 flex flex-wrap items-center gap-2">
      <button type="button" class="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">Collapse All</button>
      <button type="button" class="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">View Progress</button>
      <select defaultValue="publish-all" class="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
        <option value="publish-all">Publish All</option>
      </select>
      <button type="button" class="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white">+ Module</button>
    </div>
    <ul id="wd-modules">
      <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
        <Lesson title="LEARNING OBJECTIVES">
          <li class="wd-content-item">Introduction to the course</li>
          <li class="wd-content-item">Learn what is Web Development</li>
        </Lesson>
        <Lesson title="READING">
          <li class="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
          <li class="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
        </Lesson>
        <Lesson title="SLIDES">
          <li class="wd-content-item">Introduction to Web Development</li>
          <li class="wd-content-item">Creating an HTTP server with Node.js</li>
          <li class="wd-content-item">Creating a React Application</li>
        </Lesson>
      </Module>
      <Module title="Week 2"
        ><Lesson title="SLIDES">
          <li class="wd-content-item">Introduction to Web Development</li>
          <li class="wd-content-item">Creating an HTTP server with Node.js</li>
          <li class="wd-content-item">Creating a React Application</li>
        </Lesson>
      </Module>
      <Module title="Week 3" />
      <Module title="Sample module (AI)">
        <Lesson title="Sample lesson (AI)" />
      </Module>
    </ul>
  </div>
</template>

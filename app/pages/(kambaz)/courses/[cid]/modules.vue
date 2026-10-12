<script setup lang="ts">
import Lesson from '~/components/kambaz/course/Lesson.vue'
import Module from '~/components/kambaz/course/Module.vue'

definePageMeta({ layout: 'course' })
</script>

<template>
  <div>
    <button>Collapse All</button> <button>View Progress</button>
    <select defaultValue="publish-all">
      <option value="publish-all">Publish All</option>
    </select>
    <button>+ Module</button>
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
      <Module title="Week 2"><!--Expand lessons on your own --> </Module>
      <Module title="Week 3" />
    </ul>
  </div>
</template>

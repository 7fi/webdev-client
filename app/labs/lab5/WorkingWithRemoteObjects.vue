<script setup lang="ts">
import '~/labs/lab2/tailwind/utilities.css'

const HTTP_SERVER = useRuntimeConfig().public.httpServer

const assignment = ref({
  id: 1,
  title: 'NodeJS Assignment',
  description: 'Create a NodeJS server with ExpressJS',
  due: '2021-10-10',
  completed: false,
  score: 0,
})
const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`

const module = ref({
  id: 1,
  name: 'Lab 5 module',
  description: 'The module with the lab 5 assignments',
  course: 'CS 4550',
})
const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`

const inputClass = 'w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5'
const buttonClass = 'rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white'
</script>
<template>
  <div id="wd-working-with-remote-objects">
    <h3>Working With Remote Objects</h3>

    <h4>Retrieving Objects</h4>
    <div class="flex flex-wrap gap-2">
      <a id="wd-retrieve-assignments" :class="buttonClass" :href="ASSIGNMENT_API_URL"> Get Assignment </a>
      <a id="wd-retrieve-module" :class="buttonClass" :href="MODULE_API_URL"> Get Module </a>
    </div>

    <h4>Retrieving Properties</h4>
    <div class="flex flex-wrap gap-2">
      <a id="wd-retrieve-assignment-title" :class="buttonClass" :href="`${ASSIGNMENT_API_URL}/title`"> Get Title </a>
      <a id="wd-retrieve-module-name" :class="buttonClass" :href="`${MODULE_API_URL}/name`"> Get Module Name </a>
      <a id="wd-retrieve-module-description" :class="buttonClass" :href="`${MODULE_API_URL}/description`"> Get Module Description </a>
    </div>

    <h4>Modifying Assignment</h4>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-assignment-title" :class="inputClass" v-model="assignment.title" />
      <a id="wd-update-assignment-title" :class="buttonClass" class="whitespace-nowrap" :href="`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`"> Update Title </a>
    </div>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-assignment-score" type="number" :class="inputClass" v-model.number="assignment.score" />
      <a id="wd-update-assignment-score" :class="buttonClass" class="whitespace-nowrap" :href="`${ASSIGNMENT_API_URL}/score/${assignment.score}`"> Update Score </a>
    </div>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-assignment-completed" type="checkbox" v-model="assignment.completed" />
      <label for="wd-assignment-completed">Completed</label>
      <a id="wd-update-assignment-completed" :class="buttonClass" class="whitespace-nowrap" :href="`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`"> Update Completed </a>
    </div>

    <h4>Modifying Module</h4>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-module-name" :class="inputClass" v-model="module.name" />
      <a id="wd-update-module-name" :class="buttonClass" class="whitespace-nowrap" :href="`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`"> Update Module Name </a>
    </div>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-module-description" :class="inputClass" v-model="module.description" />
      <a id="wd-update-module-description" :class="buttonClass" class="whitespace-nowrap" :href="`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`"> Update Module Description </a>
    </div>
    <hr class="my-4" />
  </div>
</template>

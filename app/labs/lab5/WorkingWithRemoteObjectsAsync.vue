<script setup lang="ts">
import '~/labs/lab2/tailwind/utilities.css'
import * as client from '~/labs/lab5/client'

const assignment = ref<{ title?: string; description?: string; due?: string; completed?: boolean; [key: string]: unknown }>({})
const fetchAssignment = async () => {
  assignment.value = await client.fetchAssignment()
}
const updateTitle = async () => {
  assignment.value = await client.updateTitle(assignment.value.title ?? '')
}
const updateDescription = async () => {
  assignment.value = await client.updateDescription(assignment.value.description ?? '')
}
const updateDue = async () => {
  if (!assignment.value.due) return
  assignment.value = await client.updateDue(assignment.value.due)
}
const updateCompleted = async () => {
  assignment.value = await client.updateCompleted(assignment.value.completed ?? false)
}
onMounted(() => {
  fetchAssignment()
})

const inputClass = 'w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5'
const buttonClass = 'whitespace-nowrap rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white'
</script>
<template>
  <div id="wd-working-with-remote-objects-async">
    <h3>Working with Objects Asynchronously</h3>
    <h4>Assignment</h4>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-assignment-title-async" :class="inputClass" v-model="assignment.title" placeholder="Title" />
      <button type="button" id="wd-update-assignment-title-async" :class="buttonClass" @click="updateTitle">Update Title</button>
    </div>
    <div class="mb-2 flex items-center gap-2">
      <textarea id="wd-assignment-description-async" :class="inputClass" v-model="assignment.description" placeholder="Description" />
      <button type="button" id="wd-update-assignment-description-async" :class="buttonClass" @click="updateDescription">Update Description</button>
    </div>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-assignment-due-async" type="date" :class="inputClass" v-model="assignment.due" />
      <button type="button" id="wd-update-assignment-due-async" :class="buttonClass" @click="updateDue">Update Due Date</button>
    </div>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-assignment-completed-async" type="checkbox" v-model="assignment.completed" />
      <label for="wd-assignment-completed-async">Completed</label>
      <button type="button" id="wd-update-assignment-completed-async" :class="buttonClass" @click="updateCompleted">Update Completed</button>
    </div>
    <pre>{{ JSON.stringify(assignment, null, 2) }}</pre>
    <hr class="my-4" />
  </div>
</template>

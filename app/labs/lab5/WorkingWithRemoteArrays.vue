<script setup lang="ts">
import '~/labs/lab2/tailwind/utilities.css'

const HTTP_SERVER = useRuntimeConfig().public.httpServer
const API = `${HTTP_SERVER}/lab5/todos`
const todo = ref({ id: 1, title: '', description: '', completed: false })

const inputClass = 'w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5'
const buttonClass = 'whitespace-nowrap rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white'
</script>
<template>
  <div id="wd-working-with-remote-arrays">
    <h3>Working With Remote Arrays</h3>

    <h4>Retrieving Arrays</h4>
    <div class="mb-2 flex">
      <a id="wd-retrieve-todos" :class="buttonClass" :href="API">Get Todos</a>
    </div>

    <h4>Retrieving an Item from an Array by ID</h4>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-todo-id" type="number" :class="inputClass" v-model.number="todo.id" />
      <a id="wd-retrieve-todo-by-id" :class="buttonClass" :href="`${API}/${todo.id}`"> Get Todo by ID </a>
    </div>

    <h4>Creating New Items in an Array</h4>
    <div class="mb-2 flex">
      <a id="wd-create-todo" :class="buttonClass" :href="`${API}/create`">Create Todo</a>
    </div>

    <h4>Deleting from an Array</h4>
    <div class="mb-2 flex">
      <a id="wd-remove-todo" :class="buttonClass" :href="`${API}/${todo.id}/delete`"> Remove Todo with ID = {{ todo.id }} </a>
    </div>

    <h4>Updating an Item in an Array</h4>
    <div class="mb-2 flex items-center gap-2">
      <input type="number" class="w-24 rounded border border-neutral-300 px-3 py-1.5" v-model.number="todo.id" />
      <input :class="inputClass" v-model="todo.title" placeholder="New title" />
      <a id="wd-update-todo-title" :class="buttonClass" :href="`${API}/${todo.id}/title/${encodeURIComponent(todo.title)}`"> Update Todo </a>
    </div>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-todo-description" :class="inputClass" v-model="todo.description" placeholder="New description" />
      <a id="wd-update-todo-description" :class="buttonClass" :href="`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`"> Describe Todo ID = {{ todo.id }} </a>
    </div>
    <div class="mb-2 flex items-center gap-2">
      <input id="wd-todo-completed" type="checkbox" v-model="todo.completed" />
      <label for="wd-todo-completed">Completed</label>
      <a id="wd-update-todo-completed" :class="buttonClass" :href="`${API}/${todo.id}/completed/${todo.completed}`"> Complete Todo ID = {{ todo.id }} </a>
    </div>
    <hr class="my-4" />
  </div>
</template>

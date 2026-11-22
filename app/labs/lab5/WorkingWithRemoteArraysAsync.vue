<script setup lang="ts">
import '~/labs/lab2/tailwind/utilities.css'
import axios from 'axios'
import { FaPencilAlt, FaPlusCircle, FaTrash } from 'vue3-icons/fa'
import { TiDelete } from 'vue3-icons/ti'
import * as client from '~/labs/lab5/client'

type Todo = { id: number; title: string; completed: boolean; description?: string; editing?: boolean }

const todos = ref<Todo[]>([])
const errorMessage = ref<string | null>(null)

// Pulls the server's { message } out of a failed request
const showError = (error: unknown) => {
  errorMessage.value = axios.isAxiosError(error) ? (error.response?.data?.message ?? error.message) : String(error)
}

const fetchTodos = async () => {
  todos.value = await client.fetchTodos()
}
const createNewTodo = async () => {
  todos.value = await client.createNewTodo()
}
const postNewTodo = async () => {
  const newTodo = await client.postNewTodo({ title: 'New Posted Todo', completed: false })
  todos.value = [...todos.value, newTodo]
}
const removeTodo = async (todo: Todo) => {
  todos.value = await client.removeTodo(todo)
}
const deleteTodo = async (todo: Todo) => {
  try {
    await client.deleteTodo(todo)
    todos.value = todos.value.filter((t) => t.id !== todo.id)
    errorMessage.value = null
  } catch (error) {
    showError(error)
  }
}
const editTodo = (todo: Todo) => {
  todos.value = todos.value.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t))
}
const updateTodo = async (todo: Todo) => {
  try {
    // `editing` is UI-only state, so it isn't sent to the server
    const { editing, ...toSave } = todo
    await client.updateTodo(toSave)
    todos.value = todos.value.map((t) => (t.id === todo.id ? todo : t))
    errorMessage.value = null
  } catch (error) {
    showError(error)
  }
}
onMounted(() => {
  fetchTodos()
})
</script>
<template>
  <div id="wd-working-with-remote-arrays-async">
    <h3>Working with Arrays Asynchronously</h3>
    <p v-if="errorMessage" id="wd-todo-error-message" class="rounded bg-red-100 px-3 py-2 text-red-800">
      {{ errorMessage }}
    </p>
    <h4 class="flex items-center gap-2">
      Todos
      <FaPlusCircle id="wd-create-todo" class="cursor-pointer text-green-600" @click="createNewTodo" />
      <FaPlusCircle id="wd-post-todo" class="cursor-pointer text-blue-600" @click="postNewTodo" />
    </h4>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="flex items-center gap-2">
        <input type="checkbox" :checked="todo.completed" @change="updateTodo({ ...todo, completed: ($event.target as HTMLInputElement).checked })" />
        <input
          v-if="todo.editing"
          v-model="todo.title"
          class="rounded border border-neutral-300 px-2 py-0.5"
          @keydown.enter="updateTodo({ ...todo, editing: false })"
        />
        <span v-else :class="todo.completed ? 'line-through' : ''">{{ todo.title }}</span>
        <FaPencilAlt class="cursor-pointer text-blue-600" @click="editTodo(todo)" />
        <TiDelete id="wd-delete-todo" class="cursor-pointer text-2xl text-red-600" @click="deleteTodo(todo)" />
        <FaTrash id="wd-remove-todo" class="cursor-pointer text-red-600" @click="removeTodo(todo)" />
      </li>
    </ul>
    <hr class="my-4" />
  </div>
</template>

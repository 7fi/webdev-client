<script setup lang="ts">
import { ref } from 'vue'
import { useTodosContext, type Todo } from './todosContext'

const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext()

// Local form state: the todo being typed or edited
const todo = ref<Todo>({ id: '', title: '' })

function add() {
  if (!todo.value.title.trim()) return
  addTodo(todo.value.title)
  todo.value = { id: '', title: '' }
}

function update() {
  if (!todo.value.id) return
  updateTodo(todo.value)
  todo.value = { id: '', title: '' }
}

function edit(t: Todo) {
  todo.value = { ...t }
}

function remove(id: string) {
  deleteTodo(id)
  if (todo.value.id === id) todo.value = { id: '', title: '' }
}
</script>

<template>
  <div id="wd-context-todo-list" class="max-w-md">
    <h3>Todo List</h3>
    <ul class="divide-y divide-neutral-200 rounded border border-neutral-200">
      <li class="flex items-center gap-2 p-2">
        <input
          id="wd-todo-title"
          v-model="todo.title"
          placeholder="New todo"
          class="flex-1 rounded border border-neutral-300 px-3 py-1.5"
          @keyup.enter="todo.id ? update() : add()"
        />
        <button
          id="wd-update-todo-click"
          type="button"
          :disabled="!todo.id"
          class="rounded bg-yellow-500 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
          @click="update"
        >
          Update
        </button>
        <button
          id="wd-add-todo-click"
          type="button"
          class="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
          @click="add"
        >
          Add
        </button>
      </li>
      <li v-for="t in todos" :key="t.id" class="flex items-center gap-2 p-2">
        <span class="flex-1">{{ t.title }}</span>
        <button
          :id="`wd-set-todo-click-${t.id}`"
          type="button"
          class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          @click="edit(t)"
        >
          Edit
        </button>
        <button
          :id="`wd-delete-todo-click-${t.id}`"
          type="button"
          class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          @click="remove(t.id)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

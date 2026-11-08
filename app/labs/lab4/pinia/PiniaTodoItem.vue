<script setup lang="ts">
import { useTodoStore, type Todo } from './todoStore'

defineProps<{ todo: Todo }>()

const store = useTodoStore()
</script>

<template>
  <li
    :id="`wd-zustand-todo-${todo.id}`"
    class="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
  >
    <label class="flex items-center gap-2">
      <input type="checkbox" :checked="todo.done" @change="store.toggleDone(todo.id)" />
      <span :class="{ 'line-through': todo.done }">{{ todo.title }}</span>
    </label>
    <span class="flex gap-2">
      <button
        type="button"
        class="rounded bg-yellow-400 px-2 py-0.5 text-sm"
        @click="store.setTodo(todo)"
      >
        Edit
      </button>
      <button
        type="button"
        class="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
        @click="store.deleteTodo(todo.id)"
      >
        Delete
      </button>
    </span>
  </li>
</template>

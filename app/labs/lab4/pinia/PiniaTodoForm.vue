<script setup lang="ts">
import { useTodoStore } from './todoStore'

const store = useTodoStore()

const setTitle = (e: Event) =>
  store.setTodo({ ...store.todo, title: (e.target as HTMLInputElement).value })
</script>

<template>
  <div id="wd-zustand-todo-form" class="mb-3 flex flex-wrap gap-2">
    <input
      id="wd-zustand-todo-title"
      class="rounded border border-neutral-300 px-3 py-1.5"
      :value="store.todo.title"
      @input="setTitle"
    />
    <button
      id="wd-zustand-add-todo-click"
      type="button"
      class="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="store.addTodo(store.todo)"
    >
      Add
    </button>
    <button
      id="wd-zustand-update-todo-click"
      type="button"
      class="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
      @click="store.updateTodo(store.todo)"
    >
      Update
    </button>
  </div>
</template>

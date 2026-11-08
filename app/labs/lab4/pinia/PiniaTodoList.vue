<script setup lang="ts">
import { useTodoStore } from './todoStore'
import PiniaTodoForm from './PiniaTodoForm.vue'
import PiniaTodoItem from './PiniaTodoItem.vue'

const store = useTodoStore()
</script>

<template>
  <div id="wd-zustand-todo-list">
    <h3>Pinia Todo List</h3>
    <PiniaTodoForm />
    <ul class="m-0 max-w-lg list-none p-0">
      <PiniaTodoItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

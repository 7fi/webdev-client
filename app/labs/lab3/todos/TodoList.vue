<script setup lang="ts">
import '~/labs/lab2/tailwind/utilities.css'
import TodoItem from './TodoItem.vue'
import todos from './todos.json'
console.log(todos)
</script>
<template>
  <h3>Todo List</h3>
  <ul class="list-none p-0">
    <TodoItem v-for="todo in todos" :key="todo.title" :todo="todo" />
  </ul>
  <hr />
</template>

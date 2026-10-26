<script setup lang="ts">
type Todo = {
  done: boolean
  title: string
  status: string
}
const { todo = { done: true, title: 'Buy milk', status: 'COMPLETED' } } = defineProps<{
  todo?: Todo
}>()
</script>
<template>
  <li class="flex items-center gap-2 border-b py-1">
    <input type="checkbox" class="me-2" :checked="todo.done" />
    {{ todo.title }} ({{ todo.status }})
  </li>
</template>

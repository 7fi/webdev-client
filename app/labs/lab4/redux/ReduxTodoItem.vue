<script setup lang="ts">
import { useDispatch } from './vueRedux'
import { deleteTodo, type ReduxTodo } from './todosReducer'

defineProps<{ todo: ReduxTodo }>()
const emit = defineEmits<{ edit: [todo: ReduxTodo] }>()

const dispatch = useDispatch()
</script>

<template>
  <li
    :id="`wd-redux-todo-${todo.id}`"
    class="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
  >
    <span>{{ todo.title }}</span>
    <span class="flex gap-2">
      <button
        type="button"
        class="rounded bg-yellow-400 px-2 py-0.5 text-sm"
        @click="emit('edit', todo)"
      >
        Edit
      </button>
      <button
        type="button"
        class="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
        @click="dispatch(deleteTodo(todo.id))"
      >
        Delete
      </button>
    </span>
  </li>
</template>

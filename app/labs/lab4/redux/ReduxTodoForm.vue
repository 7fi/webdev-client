<script setup lang="ts">
import { useDispatch } from './vueRedux'
import { addTodo, updateTodo } from './todosReducer'

// The draft is owned by ReduxTodos (so an item's Edit can fill it) and bound here with v-model
const title = defineModel<string>('title', { required: true })
const editingId = defineModel<string | null>('editingId', { required: true })

const dispatch = useDispatch()

function save() {
  if (editingId.value) {
    dispatch(updateTodo({ id: editingId.value, title: title.value }))
    editingId.value = null
  } else {
    dispatch(addTodo(title.value))
  }
  title.value = 'Learn Mongo'
}
</script>

<template>
  <div id="wd-redux-todo-form" class="mb-2 flex flex-wrap gap-2">
    <input
      id="wd-redux-todo-title"
      v-model="title"
      class="rounded border border-neutral-300 px-2 py-1"
    />
    <button
      id="wd-redux-add-todo"
      type="button"
      class="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
      @click="save"
    >
      {{ editingId ? 'Update' : 'Add' }}
    </button>
  </div>
</template>

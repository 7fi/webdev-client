<script setup lang="ts">
import { ref } from 'vue'
import { useSelector } from './vueRedux'
import type { ReduxTodo } from './todosReducer'
import type { RootState } from './store'
import ReduxTodoForm from './ReduxTodoForm.vue'
import ReduxTodoItem from './ReduxTodoItem.vue'

const todos = useSelector((state: RootState) => state.todosReducer.todos)

// The draft stays local: it only matters while typing
const title = ref('Learn Mongo')
const editingId = ref<string | null>(null)

function edit(todo: ReduxTodo) {
  title.value = todo.title
  editingId.value = todo.id
}
</script>

<template>
  <div id="wd-redux-todos">
    <h3>Redux Todo List</h3>
    <ReduxTodoForm v-model:title="title" v-model:editing-id="editingId" />
    <ul class="m-0 max-w-lg list-none p-0">
      <ReduxTodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @edit="edit" />
    </ul>
  </div>
</template>

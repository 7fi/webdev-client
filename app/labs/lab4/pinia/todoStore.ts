import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Todo = {
  id: string
  title: string
  done: boolean
}

const emptyTodo: Todo = { id: '-1', title: 'Learn Pinia', done: false }

export const useTodoStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([
    { id: '1', title: 'Learn HTML', done: true },
    { id: '2', title: 'Learn CSS', done: true },
    { id: '3', title: 'Learn JavaScript', done: false },
  ])
  // The draft the form edits. Always a copy, so typing never changes a list item directly.
  const todo = ref<Todo>({ ...emptyTodo })

  const setTodo = (t: Todo) => {
    todo.value = { ...t }
  }
  const addTodo = (t: Todo) => {
    todos.value = [...todos.value, { ...t, id: crypto.randomUUID() }]
    todo.value = { ...emptyTodo }
  }
  const deleteTodo = (id: string) => {
    todos.value = todos.value.filter((x) => x.id !== id)
  }
  const updateTodo = (t: Todo) => {
    todos.value = todos.value.map((x) => (x.id === t.id ? { ...t } : x))
    todo.value = { ...emptyTodo }
  }
  const toggleDone = (id: string) => {
    todos.value = todos.value.map((x) => (x.id === id ? { ...x, done: !x.done } : x))
  }

  return { todos, todo, setTodo, addTodo, deleteTodo, updateTodo, toggleDone }
})

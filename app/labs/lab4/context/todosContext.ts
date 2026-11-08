import {
  defineComponent,
  inject,
  provide,
  readonly,
  ref,
  type DeepReadonly,
  type InjectionKey,
  type Ref,
} from 'vue'

export type Todo = { id: string; title: string }

export type TodosContextValue = {
  todos: DeepReadonly<Ref<Todo[]>>
  addTodo: (title: string) => void
  updateTodo: (todo: Todo) => void
  deleteTodo: (id: string) => void
}

const TodosKey: InjectionKey<TodosContextValue> = Symbol('TodosContext')

// Provider component: owns the todos state and provides it to everything in its slot
export const TodosProvider = defineComponent({
  name: 'TodosProvider',
  setup(_, { slots }) {
    const todos = ref<Todo[]>([
      { id: '1', title: 'Learn Vue' },
      { id: '2', title: 'Learn Nuxt' },
    ])

    const addTodo = (title: string) => {
      todos.value = [...todos.value, { id: Date.now().toString(), title }]
    }
    const updateTodo = (todo: Todo) => {
      todos.value = todos.value.map((t) => (t.id === todo.id ? { ...todo } : t))
    }
    const deleteTodo = (id: string) => {
      todos.value = todos.value.filter((t) => t.id !== id)
    }

    // Consumers get a read-only view, so the only way to change todos is through these functions
    provide(TodosKey, { todos: readonly(todos), addTodo, updateTodo, deleteTodo })

    return () => slots.default?.()
  },
})

export function useTodosContext() {
  const value = inject(TodosKey, null)
  if (!value) {
    throw new Error('useTodosContext must be used inside TodosProvider')
  }
  return value
}

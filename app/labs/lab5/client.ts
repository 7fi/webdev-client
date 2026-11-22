import axios from 'axios'
// Read inside each function: Nuxt composables only work inside a component's setup or a request
const httpServer = () => useRuntimeConfig().public.httpServer

export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${httpServer()}/lab5/welcome`)
  return response.data
}

const assignmentApi = () => `${httpServer()}/lab5/assignment`
export const fetchAssignment = async () => {
  const response = await axios.get(assignmentApi())
  return response.data
}
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${assignmentApi()}/title/${encodeURIComponent(title)}`)
  return response.data
}
export const updateDescription = async (description: string) => {
  const response = await axios.get(`${assignmentApi()}/description/${encodeURIComponent(description)}`)
  return response.data
}
export const updateCompleted = async (completed: boolean) => {
  const response = await axios.get(`${assignmentApi()}/completed/${completed}`)
  return response.data
}
export const updateDue = async (due: string) => {
  const response = await axios.get(`${assignmentApi()}/due/${encodeURIComponent(due)}`)
  return response.data
}

const todosApi = () => `${httpServer()}/lab5/todos`
export const fetchTodos = async () => {
  const response = await axios.get(todosApi())
  return response.data
}

export const removeTodo = async (todo: { id: number }) => {
  const response = await axios.get(`${todosApi()}/${todo.id}/delete`)
  return response.data
}

export const createNewTodo = async () => {
  const response = await axios.get(`${todosApi()}/create`)
  return response.data
}
export const postNewTodo = async (todo: { title: string; completed: boolean }) => {
  const response = await axios.post(todosApi(), todo)
  return response.data
}
export const deleteTodo = async (todo: { id: number }) => {
  const response = await axios.delete(`${todosApi()}/${todo.id}`)
  return response.data
}
export const updateTodo = async (todo: { id: number }) => {
  const response = await axios.put(`${todosApi()}/${todo.id}`, todo)
  return response.data
}

// Nuxt server routes (server/api/lab5): same origin, so no HTTP_SERVER prefix
export const fetchHello = () => $fetch<{ message: string }>('/api/lab5/hello')
export const calculate = (a: number | string, b: number | string, operation: string) =>
  $fetch<{ a: number; b: number; operation: string; result: number }>('/api/lab5/calculator', {
    query: { a, b, operation },
  })

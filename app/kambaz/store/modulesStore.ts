import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Lesson = {
  _id: string
  name: string
  description: string
  module: string
}

export type CourseModule = {
  _id: string
  name: string
  description: string
  course: string
  lessons?: Lesson[]
  editing?: boolean
}

// Modules live on the Express server; this store caches the current course's modules
export const useModulesStore = defineStore('modules', () => {
  // Empty until the Modules page fetches a course's modules
  const modules = ref<CourseModule[]>([])

  // Replaces the cache with what the server returned
  const setModules = (list: CourseModule[]) => {
    modules.value = list
  }
  // Appends a module the server already created (it assigned the _id and course)
  const addModule = (module: CourseModule) => {
    modules.value = [...modules.value, module]
  }
  const deleteModule = (moduleId: string) => {
    modules.value = modules.value.filter((m) => m._id !== moduleId)
  }
  const updateModule = (module: CourseModule) => {
    modules.value = modules.value.map((m) => (m._id === module._id ? module : m))
  }
  const editModule = (moduleId: string) => {
    modules.value = modules.value.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))
  }

  return { modules, setModules, addModule, deleteModule, updateModule, editModule }
})

import { defineStore } from 'pinia'
import { ref } from 'vue'
import modulesJson from '../database/modules.json'

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

export const useModulesStore = defineStore('modules', () => {
  // Copy the seed so edits never touch the imported JSON module
  const modules = ref<CourseModule[]>((modulesJson as CourseModule[]).map((m) => ({ ...m })))

  const addModule = (module: { name: string; course: string }) => {
    modules.value = [
      ...modules.value,
      {
        _id: crypto.randomUUID(),
        name: module.name,
        description: '',
        course: module.course,
        lessons: [],
      },
    ]
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

  return { modules, addModule, deleteModule, updateModule, editModule }
})

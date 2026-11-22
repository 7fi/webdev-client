import { defineStore } from 'pinia'
import { ref } from 'vue'

// Assignments live on the Express server; this store caches the current course's assignments.
// `until` is an optional "available until" date the editor can set.
export type Assignment = {
  _id: string
  title: string
  course: string
  description: string
  points: number
  due: string
  available: string
  until?: string
}

// Draft for the editor's "new assignment" form, scoped to a course
export const emptyAssignment = (course: string): Assignment => ({
  _id: '',
  title: 'New Assignment',
  course,
  description: 'New Assignment Description',
  points: 100,
  due: '',
  available: '',
  until: '',
})

export const useAssignmentsStore = defineStore('assignments', () => {
  // Empty until a page fetches a course's assignments
  const assignments = ref<Assignment[]>([])

  // Replaces the cache with what the server returned
  const setAssignments = (list: Assignment[]) => {
    assignments.value = list
  }
  // Appends an assignment the server already created (it assigned the _id)
  const addAssignment = (assignment: Assignment) => {
    assignments.value = [...assignments.value, assignment]
  }
  const deleteAssignment = (assignmentId: string) => {
    assignments.value = assignments.value.filter((a) => a._id !== assignmentId)
  }
  const updateAssignment = (assignment: Assignment) => {
    assignments.value = assignments.value.map((a) =>
      a._id === assignment._id ? { ...assignment } : a,
    )
  }

  // Lookup helpers for the list and the editor
  const findAssignment = (assignmentId: string) =>
    assignments.value.find((a) => a._id === assignmentId)
  const assignmentsForCourse = (courseId: string) =>
    assignments.value.filter((a) => a.course === courseId)

  return {
    assignments,
    setAssignments,
    addAssignment,
    deleteAssignment,
    updateAssignment,
    findAssignment,
    assignmentsForCourse,
  }
})

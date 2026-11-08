import { defineStore } from 'pinia'
import { ref } from 'vue'
import assignmentsJson from '../database/assignments.json'

// The JSON fields, plus an optional "available until" date the editor can set
export type Assignment = (typeof assignmentsJson)[number] & { until?: string }

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
  // Copy the seed so edits never touch the imported JSON module
  const assignments = ref<Assignment[]>(assignmentsJson.map((a) => ({ ...a })))

  // Adds a copy with a fresh _id and returns it, so the caller knows the new id
  const addAssignment = (assignment: Assignment) => {
    const created = { ...assignment, _id: crypto.randomUUID() }
    assignments.value = [...assignments.value, created]
    return created
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
    addAssignment,
    deleteAssignment,
    updateAssignment,
    findAssignment,
    assignmentsForCourse,
  }
})

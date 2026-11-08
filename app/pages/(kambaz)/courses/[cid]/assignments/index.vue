<script setup lang="ts">
definePageMeta({ layout: 'course' })
import { FaPlus, FaSearch } from 'vue3-icons/fa'
import AssignmentItem from '~/components/kambaz/course/AssignmentItem.vue'
import ConfirmDialog from '~/components/kambaz/ConfirmDialog.vue'
import { useAssignmentsStore } from '~/kambaz/store/assignmentsStore'
import { useAccountContext } from '~/kambaz/account/AccountContext'

const route = useRoute()
const cid = computed(() => (typeof route.params.cid === 'string' ? route.params.cid : ''))

const store = useAssignmentsStore()
const assignments = computed(() => store.assignmentsForCourse(cid.value))

// Only faculty can create and delete; everyone else just views
const { currentUser } = useAccountContext()
const isFaculty = computed(() => currentUser.value?.role === 'FACULTY')

// + Assignment opens the editor on a blank draft instead of adding a row here
const addAssignment = () => navigateTo(`/courses/${cid.value}/assignments/new`)

// Delete asks first: the trash icon only remembers which assignment to remove
const pendingDeleteId = ref<string | null>(null)
const pendingDeleteTitle = computed(
  () => store.findAssignment(pendingDeleteId.value ?? '')?.title ?? 'this assignment',
)
function confirmDelete() {
  if (pendingDeleteId.value) store.deleteAssignment(pendingDeleteId.value)
  pendingDeleteId.value = null
}

const details = (a: { available: string; due: string; until?: string; points: number }) =>
  [
    'Multiple Modules',
    `Not available until ${a.available}`,
    a.until ? `Available until ${a.until}` : null,
    `Due ${a.due}`,
    `${a.points} pts`,
  ]
    .filter(Boolean)
    .join(' | ')
</script>

<template>
  <div id="wd-assignments">
    <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
      <div class="relative">
        <FaSearch class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
        <input id="wd-search-assignment" placeholder="Search for Assignments" class="rounded border py-1.5 pr-3 pl-9 text-sm" />
      </div>
      <div v-if="isFaculty" class="flex gap-2">
        <button id="wd-add-assignment-group" type="button" class="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"><FaPlus /> Group</button>
        <button
          id="wd-add-assignment"
          type="button"
          class="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          @click="addAssignment"
        >
          <FaPlus /> Assignment
        </button>
      </div>
    </div>
    <h3 id="wd-assignments-title" class="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg">
      <span>ASSIGNMENTS 40% of Total</span>
      <button v-if="isFaculty" type="button" class="inline-flex items-center rounded border bg-white px-2 py-0.5 text-sm"><FaPlus /></button>
    </h3>
    <ul id="wd-assignment-list" class="m-0 list-none p-0">
      <AssignmentItem
        v-for="assignment in assignments"
        :key="assignment._id"
        :cid="cid"
        :aid="assignment._id"
        :title="assignment.title"
        :details="details(assignment)"
        :can-delete="isFaculty"
        @delete="(id) => (pendingDeleteId = id)"
      />
    </ul>
    <ConfirmDialog
      id="wd-delete-assignment-dialog"
      :show="pendingDeleteId !== null"
      title="Delete Assignment"
      :message="`Are you sure you want to remove ${pendingDeleteTitle}?`"
      @confirm="confirmDelete"
      @cancel="pendingDeleteId = null"
    />
  </div>
</template>

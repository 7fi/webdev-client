<script setup lang="ts">
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from '~/kambaz/store/assignmentsStore'
import { useAccountContext } from '~/kambaz/account/AccountContext'
import * as client from '~/kambaz/courses/client'

definePageMeta({ layout: 'course' })

const route = useRoute()
const cid = computed(() => (typeof route.params.cid === 'string' ? route.params.cid : ''))
// [...aid] is a catch-all route, so Nuxt gives aid as an array of path segments.
const aid = computed(() => [route.params.aid].flat()[0] ?? '')
const isNew = computed(() => aid.value === 'new')

const store = useAssignmentsStore()
const { currentUser } = useAccountContext()
// Signed-in non-faculty get a read-only form; signed-out visitors can edit (see the list page)
const isFaculty = computed(() => !currentUser.value || currentUser.value.role === 'FACULTY')

// The form edits a local copy; the server and store only change on Save
const draft = ref<Assignment | null>(null)
// True until the draft is ready, so "not found" doesn't flash while a reload fetches
const loading = ref(true)

const loadDraft = async () => {
  loading.value = true
  if (isNew.value) {
    draft.value = emptyAssignment(cid.value)
    loading.value = false
    return
  }
  // A reload or direct visit starts with an empty cache, so fetch the course's assignments first
  if (!store.findAssignment(aid.value)) {
    try {
      store.setAssignments(await client.findAssignmentsForCourse(cid.value))
    } catch {
      // Server unreachable: falls through to "not found"
    }
  }
  const existing = store.findAssignment(aid.value)
  draft.value = existing ? { until: '', ...existing } : null
  loading.value = false
}
onMounted(loadDraft)
watch(aid, loadDraft)

const backToList = () => navigateTo(`/courses/${cid.value}/assignments`)

const save = async () => {
  if (!draft.value) return
  if (isNew.value) {
    const { _id, ...newAssignment } = draft.value
    const created = await client.createAssignmentForCourse(cid.value, newAssignment)
    store.addAssignment(created)
  } else {
    const saved = await client.updateAssignment(draft.value)
    store.updateAssignment(saved)
  }
  backToList()
}
</script>

<template>
  <div id="wd-assignments-editor">
    <p v-if="loading">Loading…</p>
    <p v-else-if="!draft">
      Assignment not found.
      <NuxtLink :to="`/courses/${cid}/assignments`">Back to Assignments</NuxtLink>
    </p>
    <!-- Students see the same form, read-only -->
    <fieldset v-else :disabled="!isFaculty" class="m-0 border-0 p-0">
      <label for="wd-name">Assignment Name</label>
      <input id="wd-name" v-model="draft.title" class="block w-full rounded border border-neutral-300 px-3 py-1.5" />
      <span v-if="!isNew" id="wd-assignment-id" class="text-sm text-neutral-600">Assignment id: {{ aid }}</span>
      <br /><br />
      <textarea
        id="wd-description"
        v-model="draft.description"
        rows="8"
        class="w-full rounded border border-neutral-300 px-3 py-1.5"
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top" class="pe-2">
              <label for="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" v-model.number="draft.points" type="number" class="rounded border border-neutral-300 px-2 py-1" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" class="pe-2">
              <label for="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" v-model="draft.due" type="date" class="rounded border border-neutral-300 px-2 py-1" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" class="pe-2">
              <label for="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" v-model="draft.available" type="date" class="rounded border border-neutral-300 px-2 py-1" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" class="pe-2">
              <label for="wd-available-until">Available until</label>
            </td>
            <td>
              <input id="wd-available-until" v-model="draft.until" type="date" class="rounded border border-neutral-300 px-2 py-1" />
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
    <br />
    <div class="flex gap-2">
      <button
        id="wd-cancel"
        type="button"
        class="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        @click="backToList"
      >
        {{ isFaculty ? 'Cancel' : 'Back' }}
      </button>
      <button
        v-if="isFaculty && draft"
        id="wd-save"
        type="button"
        class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        @click="save"
      >
        Save
      </button>
    </div>
  </div>
</template>

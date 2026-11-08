<script setup lang="ts">
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from '~/kambaz/store/assignmentsStore'
import { useAccountContext } from '~/kambaz/account/AccountContext'

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

// The form edits a local copy; the store only changes on Save
const draft = ref<Assignment | null>(null)
watch(
  aid,
  () => {
    if (isNew.value) {
      draft.value = emptyAssignment(cid.value)
      return
    }
    const existing = store.findAssignment(aid.value)
    draft.value = existing ? { until: '', ...existing } : null
  },
  { immediate: true },
)

const backToList = () => navigateTo(`/courses/${cid.value}/assignments`)

function save() {
  if (!draft.value) return
  if (isNew.value) store.addAssignment(draft.value)
  else store.updateAssignment(draft.value)
  backToList()
}
</script>

<template>
  <div id="wd-assignments-editor">
    <p v-if="!draft">
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

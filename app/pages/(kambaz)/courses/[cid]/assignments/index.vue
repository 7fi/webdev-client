<script setup lang="ts">
definePageMeta({ layout: 'course' })
import { FaPlus, FaSearch } from 'vue3-icons/fa'
import AssignmentItem from '~/components/kambaz/course/AssignmentItem.vue'
import * as db from '~/kambaz/database'

const route = useRoute()
const cid = computed(() => route.params.cid as string)
const assignments = computed(() => db.assignments.filter((assignment) => assignment.course === cid.value))
</script>

<template>
  <div id="wd-assignments">
    <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
      <div class="relative">
        <FaSearch class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
        <input id="wd-search-assignment" placeholder="Search for Assignments" class="rounded border py-1.5 pr-3 pl-9 text-sm" />
      </div>
      <div class="flex gap-2">
        <button id="wd-add-assignment-group" type="button" class="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"><FaPlus /> Group</button>
        <button id="wd-add-assignment" type="button" class="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"><FaPlus /> Assignment</button>
      </div>
    </div>
    <h3 id="wd-assignments-title" class="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg">
      <span>ASSIGNMENTS 40% of Total</span>
      <button type="button" class="inline-flex items-center rounded border bg-white px-2 py-0.5 text-sm"><FaPlus /></button>
    </h3>
    <ul id="wd-assignment-list" class="m-0 list-none p-0">
      <AssignmentItem
        v-for="assignment in assignments"
        :key="assignment._id"
        :cid="cid"
        :aid="assignment._id"
        :title="assignment.title"
        :details="`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'course' })
import { FaPlus, FaSearch } from 'vue3-icons/fa'
import AssignmentItem from '~/components/kambaz/course/AssignmentItem.vue'

const route = useRoute()
const cid = computed(() => route.params.cid as string)
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
      <button type="button" class="rounded border bg-white px-2 py-0.5 text-sm"><FaPlus /></button>
    </h3>
    <ul id="wd-assignment-list" class="m-0 list-none p-0">
      <AssignmentItem :cid aid="1" title="A1 - ENV + HTML" details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts" />
      <AssignmentItem :cid aid="2" title="A2 - CSS + TAILWIND" details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts" />
      <AssignmentItem :cid aid="3" title="A3 - JAVASCRIPT + REACT" details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts" />
      <AssignmentItem :cid aid="4" title="A? - Super secret assignment" details="Multiple Modules | Not available until May 20 3042 at 12:00am | Due May 27 at 11:59pm | 100 pts" />
      <AssignmentItem :cid aid="ai-a" title="A9 - Sample assignment" details="Multiple Modules | Not available until May 20 3042 at 12:00am | Due May 27 at 11:59pm | 100 pts" />
    </ul>
  </div>
</template>

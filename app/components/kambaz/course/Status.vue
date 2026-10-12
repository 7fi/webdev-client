<script setup lang="ts">
import { BiImport } from 'vue3-icons/bi'
import { FaCheckCircle } from 'vue3-icons/fa'
// Filled io5 icons only: the Outline variants draw with camelCase stroke attrs
// (strokeWidth) that vue3-icons passes through unconverted, so they render invisible.
import { IoBarChart, IoHome, IoMegaphone, IoNotifications, IoStatsChart } from 'vue3-icons/io5'
import { LiaFileImportSolid } from 'vue3-icons/lia'
import { MdDoNotDisturbAlt } from 'vue3-icons/md'

const actions = [
  { id: 'wd-import-existing-content', name: 'Import Existing Content', icon: BiImport },
  { id: 'wd-import-from-commons', name: 'Import from Commons', icon: LiaFileImportSolid },
  { id: 'wd-choose-home-page', name: 'Choose Home Page', icon: IoHome },
  { id: 'wd-view-course-stream', name: 'View Course Stream', icon: IoStatsChart },
  { id: 'wd-new-announcement', name: 'New Announcement', icon: IoMegaphone },
  { id: 'wd-new-analytics', name: 'New Analytics', icon: IoBarChart },
  { id: 'wd-view-course-notifications', name: 'View Course Notifications', icon: IoNotifications },
  { id: 'wd-ai-status', name: 'SampleAction', icon: IoNotifications },
]
</script>

<template>
  <div id="wd-course-status">
    <h2>Course Status</h2>
    <div class="mb-1 flex gap-1">
      <button type="button" class="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"><MdDoNotDisturbAlt class="me-1 shrink-0 text-base" /> Unpublish</button>
      <button type="button" class="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"><FaCheckCircle class="me-1 shrink-0 text-base" /> Publish</button>
    </div>
    <button v-for="action in actions" :id="action.id" :key="action.id" type="button" class="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
      <component :is="action.icon" class="me-2 shrink-0 text-base" />
      {{ action.name }}
    </button>
  </div>
</template>

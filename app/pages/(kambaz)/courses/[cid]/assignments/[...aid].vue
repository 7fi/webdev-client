<script setup lang="ts">
definePageMeta({ layout: 'course' })
</script>
<template>
  <div id="wd-assignments-editor" class="max-w-3xl space-y-5">
    <div>
      <label for="wd-name" class="mb-1 block text-sm font-medium">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" class="w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
    </div>

    <div>
      <label for="wd-description" class="mb-1 block text-sm font-medium">Description</label>
      <textarea id="wd-description" rows="5" class="w-full rounded border border-neutral-300 px-3 py-2 text-sm">The assignment is available online Submit a link to the landing page of your Web application running on Vercel.</textarea>
    </div>

    <div class="grid grid-cols-1 items-start gap-x-4 gap-y-4 md:grid-cols-[160px_1fr]">
      <label for="wd-points" class="text-sm font-medium md:pt-2 md:text-right">Points</label>
      <input id="wd-points" value="100" class="w-full rounded border border-neutral-300 px-3 py-2 text-sm" />

      <label for="wd-group" class="text-sm font-medium md:pt-2 md:text-right">Assignment Group</label>
      <select id="wd-group" class="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm">
        <option>ASSIGNMENTS</option>
        <option>QUIZZES</option>
        <option>EXAMS</option>
        <option>PROJECT</option>
      </select>

      <label for="wd-display-grade-as" class="text-sm font-medium md:pt-2 md:text-right">Display Grade as</label>
      <select id="wd-display-grade-as" class="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm">
        <option>Percentage</option>
        <option>Points</option>
        <option>Letter</option>
      </select>

      <label for="wd-submission-type" class="text-sm font-medium md:pt-2 md:text-right">Submission Type</label>
      <div class="rounded border border-neutral-300 p-4">
        <select id="wd-submission-type" class="mb-4 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm">
          <option>Online</option>
          <option>In-person</option>
        </select>
        <p class="mb-2 text-sm font-medium">Online Entry Options</p>
        <ul class="m-0 list-none space-y-2 p-0 text-sm">
          <li><label class="inline-flex items-center gap-2"><input type="checkbox" id="wd-text-entry" />Text Entry</label></li>
          <li><label class="inline-flex items-center gap-2"><input type="checkbox" id="wd-website-url" />Website Url</label></li>
          <li><label class="inline-flex items-center gap-2"><input type="checkbox" id="wd-media-recordings" />Media Recordings</label></li>
          <li><label class="inline-flex items-center gap-2"><input type="checkbox" id="wd-student-annotation" />Student Annotation</label></li>
          <li><label class="inline-flex items-center gap-2"><input type="checkbox" id="wd-file-upload" />File Upload</label></li>
        </ul>
      </div>

      <span class="text-sm font-medium md:pt-2 md:text-right">Assign</span>
      <div class="space-y-4 rounded border border-neutral-300 p-4">
        <div>
          <label for="wd-assign-to" class="mb-1 block text-sm font-medium">Assign to</label>
          <input type="text" id="wd-assign-to" placeholder="Everyone" value="Everyone" class="w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
        </div>
        <div>
          <label for="wd-due-date" class="mb-1 block text-sm font-medium">Due</label>
          <input type="date" id="wd-due-date" class="w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="wd-available-from" class="mb-1 block text-sm font-medium">Available From</label>
            <input type="date" id="wd-available-from" class="w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
          </div>
          <div>
            <label for="wd-available-until" class="mb-1 block text-sm font-medium">Until</label>
            <input type="date" id="wd-available-until" class="w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
          </div>
        </div>
      </div>
    </div>

    <div id="wd-ai-editor-notes">
      <label for="wd-ai-editor-notes-input" class="mb-1 block text-sm font-medium">Sample notes</label>
      <textarea id="wd-ai-editor-notes-input" rows="3" class="w-full rounded border border-neutral-300 px-3 py-2 text-sm"></textarea>
    </div>

    <div class="flex justify-end gap-2 border-t border-neutral-300 pt-4">
      <NuxtLink to="./" id="wd-cancel" class="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-900 no-underline">Cancel</NuxtLink>
      <NuxtLink to="./" id="wd-save" class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline">Save</NuxtLink>
    </div>
  </div>
</template>

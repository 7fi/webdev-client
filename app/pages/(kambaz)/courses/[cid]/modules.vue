<script setup lang="ts">
import Lesson from '~/components/kambaz/course/Lesson.vue'
import Module from '~/components/kambaz/course/Module.vue'
import * as db from '~/kambaz/database'

definePageMeta({ layout: 'course' })

const route = useRoute()
const modules = computed(() => db.modules.filter((module) => module.course === route.params.cid))
</script>

<template>
  <div>
    <div class="mb-3 flex flex-wrap items-center gap-2">
      <button type="button" class="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">Collapse All</button>
      <button type="button" class="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">View Progress</button>
      <select class="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
        <option value="publish-all">Publish All</option>
        <option value="unpublish-all">Unpublish All</option>
      </select>
      <button type="button" class="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white">+ Module</button>
    </div>
    <ul id="wd-modules" class="m-0 list-none p-0">
      <Module v-for="module in modules" :key="module._id" :title="module.name">
        <Lesson v-for="lesson in module.lessons" :key="lesson._id" :title="lesson.name" />
      </Module>
    </ul>
  </div>
</template>

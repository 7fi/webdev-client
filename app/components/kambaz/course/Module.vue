<script setup lang="ts">
import Lesson from './Lesson.vue'
import ModuleControlButtons from '../modules/ModuleControlButtons.vue'
import { useModulesStore, type CourseModule } from '~/kambaz/store/modulesStore'

defineProps<{ module: CourseModule }>()

const store = useModulesStore()
const inputValue = (e: Event) => (e.target as HTMLInputElement).value
</script>
<template>
  <li class="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
    <div class="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
      <span class="flex-1">
        <input
          v-if="module.editing"
          class="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
          :value="module.name"
          @input="store.updateModule({ ...module, name: inputValue($event) })"
          @keydown.enter="store.updateModule({ ...module, editing: false })"
        />
        <template v-else>{{ module.name }}</template>
      </span>
      <ModuleControlButtons :module-id="module._id" />
    </div>
    <ul class="wd-lessons m-0 list-none p-0">
      <Lesson v-for="lesson in module.lessons" :key="lesson._id" :title="lesson.name" />
    </ul>
  </li>
</template>

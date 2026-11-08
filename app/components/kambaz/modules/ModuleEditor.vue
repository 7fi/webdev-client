<script setup lang="ts">
import { FaPlus } from 'vue3-icons/fa'
import { useModulesStore } from '~/kambaz/store/modulesStore'

const route = useRoute()
const store = useModulesStore()

// The dialog owns its own visibility and draft name
const show = ref(false)
const moduleName = ref('')

function addModule() {
  const name = moduleName.value.trim()
  if (!name) return
  store.addModule({ name, course: String(route.params.cid) })
  moduleName.value = ''
  show.value = false
}
</script>

<template>
  <button
    id="wd-add-module-btn"
    type="button"
    class="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
    @click="show = true"
  >
    <FaPlus /> Module
  </button>
  <div
    v-if="show"
    id="wd-add-module-dialog"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
  >
    <div class="w-full max-w-md rounded-lg bg-white shadow-lg">
      <div class="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
        <h3 class="m-0 text-lg font-semibold">Add Module</h3>
        <button
          type="button"
          class="text-2xl leading-none text-neutral-500"
          aria-label="Close"
          @click="show = false"
        >
          ×
        </button>
      </div>
      <div class="px-4 py-3">
        <input
          id="wd-add-module-name"
          v-model="moduleName"
          class="w-full rounded border border-neutral-300 px-3 py-1.5"
          placeholder="Module name"
        />
      </div>
      <div class="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
        <button
          id="wd-add-module-cancel"
          type="button"
          class="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
          @click="show = false"
        >
          Cancel
        </button>
        <button
          id="wd-add-module-submit"
          type="button"
          :disabled="!moduleName.trim()"
          class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
          @click="addModule"
        >
          Add Module
        </button>
      </div>
    </div>
  </div>
</template>

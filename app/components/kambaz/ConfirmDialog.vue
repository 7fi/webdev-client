<script setup lang="ts">
defineProps<{ show: boolean; title: string; message: string; confirmLabel?: string }>()
const emit = defineEmits<{ confirm: []; cancel: [] }>()
</script>

<template>
  <div
    v-if="show"
    class="wd-confirm-dialog fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    role="dialog"
    aria-modal="true"
  >
    <div class="w-full max-w-md rounded-lg bg-white shadow-lg">
      <div class="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
        <h3 class="m-0 text-lg font-semibold">{{ title }}</h3>
        <button
          type="button"
          class="text-2xl leading-none text-neutral-500"
          aria-label="Close"
          @click="emit('cancel')"
        >
          ×
        </button>
      </div>
      <p class="m-0 px-4 py-3">{{ message }}</p>
      <div class="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
        <button
          type="button"
          class="wd-confirm-cancel rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
          @click="emit('cancel')"
        >
          Cancel
        </button>
        <button
          type="button"
          class="wd-confirm-ok rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          @click="emit('confirm')"
        >
          {{ confirmLabel ?? 'Yes' }}
        </button>
      </div>
    </div>
  </div>
</template>

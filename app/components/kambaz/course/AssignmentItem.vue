<script setup lang="ts">
import { FaFileAlt, FaTrash } from 'vue3-icons/fa'

defineProps<{ cid: string; aid: string; title: string; details: string; canDelete?: boolean }>()
const emit = defineEmits<{ delete: [aid: string] }>()
</script>

<template>
  <li class="wd-assignment-list-item mb-3 flex items-start gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
    <FaFileAlt class="mt-1 shrink-0 text-xl text-green-700" />
    <div class="flex-1">
      <NuxtLink :to="`/courses/${cid}/assignments/${aid}`" class="wd-assignment-link font-semibold text-neutral-900 no-underline">
        {{ title }}
      </NuxtLink>
      <div class="mt-1 text-sm text-neutral-600">{{ details }}</div>
    </div>
    <FaTrash
      v-if="canDelete"
      class="wd-delete-assignment mt-1 shrink-0 cursor-pointer text-red-600"
      title="Delete assignment"
      @click="emit('delete', aid)"
    />
  </li>
</template>

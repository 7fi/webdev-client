<script setup lang="ts">
import { FaPencilAlt, FaTrash } from 'vue3-icons/fa'
import { BsPlus } from 'vue3-icons/bs'
import { IoEllipsisVertical } from 'vue3-icons/io5'
import GreenCheckmark from './GreenCheckmark.vue'
import { useModulesStore } from '~/kambaz/store/modulesStore'

defineProps<{ moduleId: string }>()

const store = useModulesStore()
</script>

<template>
  <div class="flex items-center gap-2">
    <FaPencilAlt
      class="cursor-pointer text-blue-600"
      title="Edit module"
      @click="store.editModule(moduleId)"
    />
    <FaTrash
      class="cursor-pointer text-red-600"
      title="Delete module"
      @click="store.deleteModule(moduleId)"
    />
    <GreenCheckmark />
    <BsPlus class="text-3xl" />
    <IoEllipsisVertical class="text-xl" />
  </div>
</template>

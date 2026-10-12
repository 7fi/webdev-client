<script setup lang="ts">
import GreenCheckmark from '../modules/GreenCheckmark.vue'

defineProps<{ title: string }>()
</script>
<template>
  <li class="wd-lesson border-l-[3px] border-green-600 p-3 pl-1">
    <div class="flex items-center justify-between">
      <span class="wd-title">{{ title }}</span>
      <GreenCheckmark />
    </div>
    <ul class="wd-content mt-2 list-disc pl-6">
      <slot />
    </ul>
  </li>
</template>

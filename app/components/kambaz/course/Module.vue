<script setup lang="ts">
import GreenCheckmark from '../modules/GreenCheckmark.vue'

defineProps<{ title: string }>()
</script>
<template>
  <li class="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
    <div class="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
      <span> {{ title }} </span><GreenCheckmark />
    </div>
    <ul class="wd-lessons m-0 list-none p-0">
      <slot />
    </ul>
  </li>
</template>

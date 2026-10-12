<script setup lang="ts">
import Status from '~/components/kambaz/course/Status.vue'
import Modules from './modules.vue'

definePageMeta({ layout: 'course' })
</script>
<template>
  <div id="wd-home" class="flex gap-4">
    <div class="min-w-0 flex-1">
      <Modules />
    </div>
    <div class="hidden w-[250px] shrink-0 lg:block">
      <Status />
    </div>
  </div>
</template>

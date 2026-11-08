<script setup lang="ts">
import Module from '~/components/kambaz/course/Module.vue'
import ModulesControls from '~/components/kambaz/modules/ModulesControls.vue'
import { useModulesStore } from '~/kambaz/store/modulesStore'

definePageMeta({ layout: 'course' })

const route = useRoute()
const store = useModulesStore()
const courseModules = computed(() =>
  store.modules.filter((module) => module.course === route.params.cid),
)
</script>

<template>
  <div>
    <ModulesControls />
    <ul id="wd-modules" class="m-0 list-none p-0">
      <Module v-for="module in courseModules" :key="module._id" :module="module" />
    </ul>
  </div>
</template>

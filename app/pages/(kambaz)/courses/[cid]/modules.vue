<script setup lang="ts">
import Module from '~/components/kambaz/course/Module.vue'
import ModulesControls from '~/components/kambaz/modules/ModulesControls.vue'
import * as client from '~/kambaz/courses/client'
import { useModulesStore, type CourseModule } from '~/kambaz/store/modulesStore'

definePageMeta({ layout: 'course' })

const route = useRoute()
const courseId = computed(() => String(route.params.cid))
const store = useModulesStore()

// The server already filters to this course, so the store holds only its modules
const loadModules = async () => {
  try {
    store.setModules(await client.findModulesForCourse(courseId.value))
  } catch {
    store.setModules([])
  }
}
onMounted(loadModules)
watch(courseId, loadModules)

const onAddModule = async (moduleName: string) => {
  const created = await client.createModuleForCourse(courseId.value, { name: moduleName })
  store.addModule(created)
}
const onRemoveModule = async (moduleId: string) => {
  await client.deleteModule(moduleId)
  store.deleteModule(moduleId)
}
const onUpdateModule = async (module: CourseModule) => {
  // `editing` is UI-only state, so it isn't saved on the server
  const { editing, ...toSave } = module
  const saved = await client.updateModule(toSave)
  store.updateModule(saved)
}
</script>

<template>
  <div>
    <ModulesControls @add-module="onAddModule" />
    <ul id="wd-modules" class="m-0 list-none p-0">
      <Module
        v-for="module in store.modules"
        :key="module._id"
        :module="module"
        @update-module="onUpdateModule"
        @delete-module="onRemoveModule"
      />
    </ul>
  </div>
</template>

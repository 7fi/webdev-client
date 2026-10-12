<script setup lang="ts">
import CourseNavigation from '~/components/kambaz/CourseNavigation.vue'

const route = useRoute()
const cid = computed(() => route.params.cid as string)
</script>

<template>
  <NuxtLayout name="kambaz">
    <div id="wd-courses">
      <h2>Courses {{ cid }}</h2>
      <hr />
      <div class="flex gap-4">
        <div class="hidden w-[140px] shrink-0 md:block">
          <CourseNavigation :cid="cid" />
        </div>
        <div class="min-w-0 flex-1"><slot /></div>
      </div>
    </div>
  </NuxtLayout>
</template>

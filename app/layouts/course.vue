<script setup lang="ts">
import { FaAlignJustify } from 'vue3-icons/fa6'
import CourseNavigation from '~/components/kambaz/CourseNavigation.vue'
import Breadcrumb from '~/components/kambaz/course/Breadcrumb.vue'
import { courses } from '~/kambaz/database'

const route = useRoute()
const cid = computed(() => route.params.cid as string)
const course = computed(() => courses.find((c) => c._id === cid.value))
</script>

<template>
  <NuxtLayout name="kambaz">
    <div id="wd-courses">
      <h2 class="text-2xl font-semibold text-red-600">
        <FaAlignJustify class="me-4 mb-1 inline text-xl" />
        <Breadcrumb :course="course" />
        <span class="ms-2 text-sm">({{ course?._id }})</span>
      </h2>
      <hr class="my-3" />
      <div class="flex gap-4">
        <div class="hidden w-[140px] shrink-0 md:block">
          <CourseNavigation :cid="cid" />
        </div>
        <div class="min-w-0 flex-1"><slot /></div>
      </div>
    </div>
  </NuxtLayout>
</template>

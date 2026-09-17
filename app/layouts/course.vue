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
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation :cid="cid" />
            </td>
            <td valign="top" width="100%"><slot /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </NuxtLayout>
</template>

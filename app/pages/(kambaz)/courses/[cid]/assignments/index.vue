<script setup lang="ts">
definePageMeta({ layout: 'course' })
import AssignmentItem from '~/components/kambaz/course/AssignmentItem.vue'

const route = useRoute()
const cid = computed(() => route.params.cid as string)
</script>

<template>
  <div id="wd-assignments">
    <!-- {/* search input, + Group, + Assignment */} -->
    <input id="wd-search-assignment" placeholder="Search for Assignments" />
    <button id="wd-add-assignment-group">+ Group</button>
    <button id="wd-add-assignment">+ Assignment</button>
    <h3 id="wd-assignments-title">
      ASSIGNMENTS 40% of Total
      <button>+</button>
    </h3>
    <ul id="wd-assignment-list">
      <!-- {/* at least three AssignmentItems using cid */} -->
      <AssignmentItem :cid aid="1" title="A1 - ENV + HTML" details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts" />
      <AssignmentItem :cid aid="2" title="A2 - CSS + TAILWIND" details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts" />
      <AssignmentItem :cid aid="3" title="A3 - JAVASCRIPT + REACT" details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts" />
    </ul>
  </div>
</template>

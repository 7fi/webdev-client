<script setup lang="ts">
import CourseBadge from './CourseBadge.vue'
</script>

<template>
  <div id="wd-typed-props">
    <h4>Typing React Props</h4>
    <CourseBadge number="CS5610">Web Development</CourseBadge>
    <CourseBadge number="CS5800" :credits="3"> Algorithms </CourseBadge>
    <hr />
  </div>
</template>

<script setup lang="ts">
const color = 'blue'
const dangerous = true
const approved = true
const approvedClass = approved ? 'wd-bg-green' : 'wd-bg-yellow'
const shade = 'green'
</script>
<template>
  <div id="wd-classes">
    <h2>Classes</h2>
    <div class="wd-bg-yellow wd-fg-black wd-padding-10px">Yellow background</div>
    <div class="wd-bg-blue wd-fg-black wd-padding-10px">Blue background</div>
    <div class="wd-bg-red wd-fg-black wd-padding-10px">Red background</div>
    <div :class="`wd-bg-${color} wd-fg-black wd-padding-10px`">Dynamic Blue background</div>
    <div :class="dangerous ? 'wd-bg-red wd-fg-black wd-padding-10px' : 'wd-bg-green wd-fg-black wd-padding-10px'">Dangerous background</div>
    <div :class="`${approvedClass} wd-fg-black wd-padding-10px`">{{ approved ? 'Green' : 'Yellow' }} background</div>
    <div :class="`wd-bg-${shade} wd-fg-black wd-padding-10px`">Dynamic Green background</div>
    <hr />
  </div>
</template>
<style scoped>
.wd-bg-yellow {
  background-color: lightyellow;
}
.wd-bg-blue {
  background-color: lightblue;
}
.wd-bg-red {
  background-color: lightcoral;
}
.wd-bg-green {
  background-color: lightgreen;
}
.wd-fg-black {
  color: black;
}
.wd-padding-10px {
  padding: 10px;
}
</style>

<script setup lang="ts">
const squares = [1, 4, 16, 25, 36]
</script>
<template>
  <div id="wd-json-stringify">
    <h3>JSON Stringify</h3>
    squares = {{ JSON.stringify(squares) }} <br />
    object = {{ JSON.stringify({ course: 'RS101', credits: 4 }) }}<br />
    sampleCourse = {{ JSON.stringify({ course: 'RS102', modules: 3 }) }}<br />
    <hr />
  </div>
</template>

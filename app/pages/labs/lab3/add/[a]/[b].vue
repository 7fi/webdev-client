<script setup lang="ts">
definePageMeta({ layout: 'labs' })

const route = useRoute()
const a = computed(() => String(route.params.a))
const b = computed(() => String(route.params.b))
</script>
<template>
  <div id="wd-add-path-parameters">
    <h4>Add Path Parameters</h4>
    {{ a }} + {{ b }} = {{ parseInt(a) + parseInt(b) }}
  </div>
</template>

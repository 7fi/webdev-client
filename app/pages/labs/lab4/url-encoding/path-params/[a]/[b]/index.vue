<script setup lang="ts">
definePageMeta({ layout: 'labs' })

const route = useRoute()
const a = computed(() => String(route.params.a))
const b = computed(() => String(route.params.b))
const sum = computed(() => parseInt(a.value) + parseInt(b.value))
</script>
<template>
  <div id="wd-path-parameters">
    <h4>Path Parameters</h4>
    {{ a }} + {{ b }} = {{ sum }}
  </div>
</template>

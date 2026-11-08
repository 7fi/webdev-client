<script setup lang="ts">
definePageMeta({ layout: 'labs' })

const route = useRoute()
const a = computed(() => String(route.params.a))
const b = computed(() => String(route.params.b))
const c = computed(() => String(route.params.c))
const sum = computed(() => parseInt(a.value) + parseInt(b.value) + parseInt(c.value))
</script>
<template>
  <div id="wd-path-parameters">
    <h4>Path Parameters</h4>
    {{ a }} + {{ b }} + {{ c }} = {{ sum }}
  </div>
</template>

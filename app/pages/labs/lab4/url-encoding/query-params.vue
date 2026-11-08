<script setup lang="ts">
definePageMeta({ layout: 'labs' })

const route = useRoute()
const firstValue = (v: unknown) => (Array.isArray(v) ? v[0] : v)
const aRaw = computed(() => String(firstValue(route.query.a) || '0'))
const bRaw = computed(() => String(firstValue(route.query.b) || '0'))
const cRaw = computed(() => String(firstValue(route.query.c) || '0'))
const sum = computed(
  () => parseFloat(aRaw.value) + parseFloat(bRaw.value) + parseFloat(cRaw.value),
)
</script>
<template>
  <div id="wd-query-calculator">
    <h1>Calculator – Query Parameters</h1>
    <p>Raw query values (already decoded by Nuxt):</p>
    <p>
      a = <code>{{ aRaw }}</code>
    </p>
    <p>
      b = <code>{{ bRaw }}</code>
    </p>
    <p>
      c = <code>{{ cRaw }}</code>
    </p>
    <h2 class="text-green-700">Sum = {{ sum }}</h2>
  </div>
</template>

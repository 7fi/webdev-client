<script lang="ts" setup>
import '~/labs/lab2/tailwind/utilities.css'

const HTTP_SERVER = useRuntimeConfig().public.httpServer
const a = ref('34')
const b = ref('23')
</script>
<template>
  <div id="wd-query-parameters">
    <h3>Query Parameters</h3>
    <div class="mb-2 flex gap-2">
      <input class="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" v-model="a" type="number" id="wd-query-parameter-a" />
      <input class="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" v-model="b" type="number" id="wd-query-parameter-b" />
    </div>
    <div class="flex flex-wrap gap-2">
      <a id="wd-query-parameter-add" class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" :href="`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`"> Add {{ a }} + {{ b }} </a>
      <a id="wd-query-parameter-subtract" class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white" :href="`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`"> Subtract {{ a }} - {{ b }} </a>
      <a id="wd-query-parameter-multiply" class="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white" :href="`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`"> Multiply {{ a }} * {{ b }} </a>
      <a id="wd-query-parameter-divide" class="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium text-black" :href="`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`"> Divide {{ a }} / {{ b }} </a>
    </div>
    <hr class="my-4" />
  </div>
</template>

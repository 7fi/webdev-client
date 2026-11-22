<script lang="ts" setup>
import '~/labs/lab2/tailwind/utilities.css'

const HTTP_SERVER = useRuntimeConfig().public.httpServer
const a = ref('34')
const b = ref('23')
</script>
<template>
  <div id="wd-path-parameters">
    <h3>Path Parameters</h3>
    <div class="mb-2 flex gap-2">
      <input class="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" v-model="a" type="number" id="wd-path-parameter-a" />
      <input class="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" v-model="b" type="number" id="wd-path-parameter-b" />
    </div>
    <div class="flex flex-wrap gap-2">
      <a id="wd-path-parameter-add" class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" :href="`${HTTP_SERVER}/lab5/add/${a}/${b}`"> Add {{ a }} + {{ b }} </a>
      <a id="wd-path-parameter-subtract" class="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white" :href="`${HTTP_SERVER}/lab5/subtract/${a}/${b}`"> Subtract {{ a }} - {{ b }} </a>
      <a id="wd-path-parameter-multiply" class="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white" :href="`${HTTP_SERVER}/lab5/multiply/${a}/${b}`"> Multiply {{ a }} * {{ b }} </a>
      <a id="wd-path-parameter-divide" class="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium text-black" :href="`${HTTP_SERVER}/lab5/divide/${a}/${b}`"> Divide {{ a }} / {{ b }} </a>
    </div>
    <hr class="my-4" />
  </div>
</template>

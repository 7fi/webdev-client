<script setup lang="ts">
import '~/labs/lab2/tailwind/utilities.css'
import * as client from '~/labs/lab5/client'

const SYMBOLS: Record<string, string> = { add: '+', subtract: '-', multiply: '*', divide: '/' }

const a = ref<number | ''>(3)
const b = ref<number | ''>(5)
const operation = ref('add')
const result = ref('')
const error = ref<string | null>(null)

const calculate = async () => {
  try {
    const data = await client.calculate(a.value, b.value, operation.value)
    result.value = `${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`
    error.value = null
  } catch (e) {
    // The route answers 400 with { error } for bad input
    const data = (e as { data?: { error?: string } }).data
    error.value = data?.error ?? 'Request failed'
    result.value = ''
  }
}

// Recalculate whenever the operation changes, like the React version
watch(operation, calculate)

const inputClass = 'w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5'
</script>
<template>
  <div id="wd-calculator">
    <h3>Calculator (Nuxt Server Route)</h3>
    <div class="mb-2 flex flex-wrap items-center gap-2">
      <input id="wd-calculator-a" type="number" class="w-32 rounded border border-neutral-300 px-3 py-1.5" v-model="a" />
      <select id="wd-calculator-operation" class="rounded border border-neutral-300 px-3 py-1.5" v-model="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input id="wd-calculator-b" type="number" class="w-32 rounded border border-neutral-300 px-3 py-1.5" v-model="b" />
      <button type="button" id="wd-calculator-button" class="whitespace-nowrap rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" @click="calculate">
        Calculate
      </button>
    </div>
    <input id="wd-calculator-result" readonly :class="inputClass" :value="result" placeholder="Result" />
    <p v-if="error" id="wd-calculator-error" class="mt-2 rounded bg-red-100 px-3 py-2 text-red-800">{{ error }}</p>
    <hr class="my-4" />
  </div>
</template>

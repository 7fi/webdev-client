<script setup lang="ts">
import { ref } from 'vue'
import { useDispatch, useSelector } from './vueRedux'
import { add } from './addReducer'
import type { RootState } from './store'

// Local draft state: only matters while typing
const a = ref(12)
const b = ref(23)

// Application state from the store
const sum = useSelector((state: RootState) => state.addReducer.sum)
const dispatch = useDispatch()

const toNumber = (e: Event) => Number((e.target as HTMLInputElement).value)
</script>

<template>
  <div id="wd-add-redux">
    <h3>Add Redux</h3>
    <input
      id="wd-add-redux-a"
      type="number"
      class="me-2 rounded border border-neutral-300 px-2 py-1"
      :value="a"
      @input="a = toNumber($event)"
    />
    <input
      id="wd-add-redux-b"
      type="number"
      class="me-2 rounded border border-neutral-300 px-2 py-1"
      :value="b"
      @input="b = toNumber($event)"
    />
    <button
      id="wd-add-redux-click"
      type="button"
      class="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      @click="dispatch(add({ a, b }))"
    >
      Add Redux
    </button>
    <h4 id="wd-add-redux-sum">Sum: {{ sum }}</h4>
  </div>
</template>

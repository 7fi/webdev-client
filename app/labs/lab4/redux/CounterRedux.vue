<script setup lang="ts">
import { useDispatch, useSelector } from './vueRedux'
import { down, reset, up } from './counterReducer'
import type { RootState } from './store'

const count = useSelector((state: RootState) => state.counterReducer.count)
const dispatch = useDispatch()
</script>

<template>
  <div id="wd-redux-counter">
    <h3>Redux Counter: {{ count }}</h3>
    <button
      id="wd-redux-up-click"
      type="button"
      class="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="dispatch(up())"
    >
      Up
    </button>
    <button
      id="wd-redux-down-click"
      type="button"
      class="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="dispatch(down())"
    >
      Down
    </button>
    <button
      id="wd-redux-reset-click"
      type="button"
      class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="dispatch(reset())"
    >
      Reset
    </button>
  </div>
</template>

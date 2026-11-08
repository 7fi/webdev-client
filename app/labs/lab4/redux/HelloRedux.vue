<script setup lang="ts">
import { useSelector } from './vueRedux'
import type { RootState } from './store'

const message = useSelector((state: RootState) => state.helloReducer.message)
</script>

<template>
  <div id="wd-hello-redux">
    <h3>Hello Redux</h3>
    <h4>{{ message }}</h4>
  </div>
</template>

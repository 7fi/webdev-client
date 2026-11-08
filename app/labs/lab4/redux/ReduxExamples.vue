<script setup lang="ts">
import { makeStore } from './store'
import { ReduxProvider } from './vueRedux'
import HelloRedux from './HelloRedux.vue'
import CounterRedux from './CounterRedux.vue'
import AddRedux from './AddRedux.vue'
import ReduxTodos from './ReduxTodos.vue'

const store = makeStore()
</script>

<template>
  <ReduxProvider :store="store">
    <div id="wd-redux-examples">
      <h2>Redux Toolkit</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <ReduxTodos />
      <hr />
    </div>
  </ReduxProvider>
</template>

<script setup lang="ts">
import CounterProvider from './CounterContext.vue'
import ContextCounterRead from './ContextCounterRead.vue'
import ContextCounterWrite from './ContextCounterWrite.vue'
import { TodosProvider } from './todosContext'
import ReactContextTodoList from './ReactContextTodoList.vue'
</script>

<template>
  <div id="wd-context-examples">
    <h2>Vue Provide / Inject</h2>
    <p>Two siblings share one counter without the parent passing props through the middle.</p>
    <CounterProvider>
      <ContextCounterRead />
      <ContextCounterWrite />
    </CounterProvider>
    <TodosProvider>
      <ReactContextTodoList />
    </TodosProvider>
    <hr />
  </div>
</template>

import { defineStore } from 'pinia'
import { ref } from 'vue'

// A "setup store": refs are state, functions are actions. Whatever is returned is the store.
export const useCounterStore = defineStore('counter', () => {
  const count = ref(7)
  const up = () => {
    count.value++
  }
  const down = () => {
    count.value--
  }
  return { count, up, down }
})

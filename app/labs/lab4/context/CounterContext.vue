<script lang="ts">
import { inject, type InjectionKey, type Ref } from 'vue'

export type CounterContextValue = {
  count: Ref<number>
  setCount: (count: number) => void
}

const CounterKey: InjectionKey<CounterContextValue> = Symbol('CounterContext')

export function useCounterContext() {
  const value = inject(CounterKey, null)
  if (!value) {
    throw new Error('useCounterContext must be used inside CounterProvider')
  }
  return value
}
</script>

<!-- The default export of this file is the provider component -->
<script setup lang="ts">
import { provide, ref } from 'vue'

const count = ref(7)
const setCount = (n: number) => {
  count.value = n
}

provide(CounterKey, { count, setCount })
</script>

<template>
  <slot />
</template>

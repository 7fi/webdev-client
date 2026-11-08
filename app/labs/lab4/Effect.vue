<script setup lang="ts">
import { ref, watchPostEffect } from 'vue'

const name = ref('Kambaz')
const count = ref(0)

// Vue's closest match to useEffect: runs after the DOM updates, and only in the browser
// (skipped during server rendering). There is no dependency array: Vue re-runs it
// whenever a ref it read last time (name or count) changes.
watchPostEffect(() => {
  document.title = `${name.value} — clicked ${count.value}`
  console.log(name.value, count.value)
})
</script>

<template>
  <div id="wd-use-effect">
    <h2>watchPostEffect (Vue's useEffect)</h2>
    <p>
      The document title updates after Vue updates the DOM, whenever <code>name</code> or
      <code>count</code> changes.
    </p>
    <input
      id="wd-effect-name"
      v-model="name"
      class="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
    />
    <button
      id="wd-effect-count-click"
      type="button"
      class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="count++"
    >
      Clicked {{ count }}
    </button>
    <hr />
  </div>
</template>

<script lang="ts" setup>
const done = ref(true)
const urgent = ref(true)
const saved = ref(true)
</script>
<template>
  <div id="wd-boolean-state-variables">
    <h2>Boolean State Variables</h2>
    <p>{{ done ? 'Done' : 'Not done' }}</p>
    <label class="flex items-center gap-2">
      <input type="checkbox" :checked="done" @change="done = !done" id="wd-boolean-checkbox" />
      Done
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" :checked="urgent" @change="urgent = !urgent" id="wd-boolean-checkbox-urgent" />
      Urgent
    </label>
    <label class="flex items-center gap-2">
      <input type="checkbox" :checked="urgent" @change="urgent = !urgent" id="wd-boolean-saved" />
      Saved
    </label>
    <div v-if="done" class="mt-2 rounded bg-yellow-100 p-2">Yay! Done</div>
    <div v-if="urgent" class="mt-2 rounded bg-yellow-100 p-2">Its urgent!!</div>
    <div v-if="saved" class="mt-2 rounded bg-yellow-100 p-2">Saved</div>
    <hr />
  </div>
</template>

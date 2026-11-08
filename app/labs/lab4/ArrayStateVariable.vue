<script lang="ts" setup>
const array = ref([1, 2, 3, 4, 5])

const addElement = () => {
  array.value = [...array.value, Math.floor(Math.random() * 100)]
}
const clearArray = () => {
  array.value = [1, 2, 3, 4, 5]
}
const deleteElement = (index: number) => {
  array.value = array.value.filter((_item, i) => i !== index)
}
</script>
<template>
  <div id="wd-array-state-variables">
    <h2>Array State Variable</h2>
    <button type="button" @click="addElement" id="wd-add-element-click" class="mb-2 me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white">Add Element</button>
    <button type="button" @click="clearArray" id="wd-clear-array-click" class="mb-2 rounded bg-yellow-500 px-3 py-1.5 text-sm font-medium text-white">Clear</button>
    <ul class="m-0 max-w-xs list-none p-0">
      <li v-for="(item, index) in array" :key="`${item}-${index}`" class="mb-1 flex items-center justify-between rounded border border-neutral-200 bg-green-50 px-3 py-1">
        <span>{{ item }}</span>
        <button type="button" @click="deleteElement(index)" :id="`wd-delete-element-${index}-click`" class="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white">Delete</button>
      </li>
    </ul>
    <hr />
  </div>
</template>

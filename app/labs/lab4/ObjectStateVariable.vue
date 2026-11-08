<script lang="ts" setup>
const person = ref({ name: 'Peter', age: 24, city: 'Boston' })

const inputValue = (e: Event) => (e.target as HTMLInputElement).value

// Replace the whole object with a copy (spread), like setPerson in React
const setName = (e: Event) => {
  person.value = { ...person.value, name: inputValue(e) }
}
const setAge = (e: Event) => {
  person.value = { ...person.value, age: parseInt(inputValue(e)) || 0 }
}
const setCity = (e: Event) => {
  person.value = { ...person.value, city: inputValue(e) }
}
</script>
<template>
  <div id="wd-object-state-variables">
    <h2>Object State Variables</h2>
    <pre>{{ JSON.stringify(person, null, 2) }}</pre>
    <input class="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" :value="person.name" @input="setName" id="wd-person-name" />
    <input type="number" class="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" :value="person.age" @input="setAge" id="wd-person-age" />
    <input class="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" :value="person.city" @input="setCity" id="wd-person-city" />
    <hr />
  </div>
</template>

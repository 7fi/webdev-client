<script lang="ts" setup>
function dateObjectToHtmlDateString(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
function htmlDateStringToDate(dateString: string) {
  const [year = 0, month = 1, day = 1] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day, 0, 0)
}

const startDate = ref(new Date())

// Writable computed: lets v-model read/write the Date as a "YYYY-MM-DD" string
const startDateString = computed({
  get: () => dateObjectToHtmlDateString(startDate.value),
  set: (value: string) => {
    if (value) startDate.value = htmlDateStringToDate(value)
  },
})

const dueDate = ref(new Date(2026, 0, 22, 10, 30))
const dueDateString = computed({
  get: () => dateObjectToHtmlDateString(dueDate.value),
  set: (value: string) => {
    if (value) dueDate.value = htmlDateStringToDate(value)
  },
})

const endDate = ref(new Date())
const endDateString = computed({
  get: () => dateObjectToHtmlDateString(endDate.value),
  set: (value: string) => {
    if (value) endDate.value = htmlDateStringToDate(value)
  },
})
</script>
<template>
  <div id="wd-date-state-variables">
    <h2>Date State Variables</h2>
    <h3>{{ startDate.toDateString() }}</h3>
    <h3>{{ startDateString }}</h3>
    <input type="date" class="rounded border border-neutral-300 px-3 py-1.5" v-model="startDateString" id="wd-start-date" />
    <h3>{{ dueDate.toDateString() }}</h3>
    <h3>{{ dueDateString }}</h3>
    <input type="date" class="rounded border border-neutral-300 px-3 py-1.5" v-model="dueDateString" id="wd-due-date" />
    <h3>{{ endDate.toDateString() }}</h3>
    <h3>{{ endDateString }}</h3>
    <input type="date" class="rounded border border-neutral-300 px-3 py-1.5" v-model="endDateString" id="wd-end-date" />
    <hr />
  </div>
</template>

<script setup lang="ts">
// v-model on type="number" inputs casts to a number (or '' when empty)
const a = ref<string | number>('5')
const b = ref<string | number>('10')
const c = ref<string | number>('2')
const baseUrl = '/labs/lab4/url-encoding'

const queryUrl = computed(
  () =>
    `${baseUrl}/query-params?a=${encodeURIComponent(a.value)}&b=${encodeURIComponent(b.value)}&c=${encodeURIComponent(c.value)}`,
)
const pathUrl = computed(
  () =>
    `${baseUrl}/path-params/${encodeURIComponent(a.value)}/${encodeURIComponent(b.value)}/${encodeURIComponent(c.value)}`,
)

function goToQueryVersion() {
  const params = new URLSearchParams()
  params.set('a', String(a.value))
  params.set('b', String(b.value))
  params.set('c', String(c.value))
  navigateTo(`${baseUrl}/query-params?${params.toString()}`)
}

function goToPathVersion() {
  navigateTo(pathUrl.value)
}
</script>

<template>
  <div id="wd-url-encoding" class="max-w-xl">
    <h2>Addition Calculator</h2>
    <p>
      Enter two numbers and navigate using either buttons (programmatic) or links (declarative):
    </p>
    <input
      id="wd-url-a"
      v-model="a"
      type="number"
      class="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
    />
    <input
      id="wd-url-b"
      v-model="b"
      type="number"
      class="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
    />
    <input
      id="wd-url-c"
      v-model="c"
      type="number"
      class="mb-3 block w-full rounded border border-neutral-300 px-3 py-1.5"
    />
    <h4>Programmatic navigation (using navigateTo):</h4>
    <button
      id="wd-url-query-programmatic"
      type="button"
      class="mb-2 w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="goToQueryVersion"
    >
      {{ a }} + {{ b }} + {{ c }} → Query Params (programmatic)
    </button>
    <button
      id="wd-url-path-programmatic"
      type="button"
      class="mb-3 w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      @click="goToPathVersion"
    >
      {{ a }} + {{ b }} + {{ c }} → Path Params (programmatic)
    </button>
    <h4>Declarative navigation (using NuxtLink):</h4>
    <NuxtLink
      id="wd-url-query-link"
      :to="queryUrl"
      class="mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline"
    >
      {{ a }} + {{ b }} + {{ c }} → Query Params (Link)
    </NuxtLink>
    <NuxtLink
      id="wd-url-path-link"
      :to="pathUrl"
      class="mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline"
    >
      {{ a }} + {{ b }} + {{ c }} → Path Params (Link)
    </NuxtLink>
    <hr />
  </div>
</template>

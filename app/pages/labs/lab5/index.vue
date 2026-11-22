<script setup>
// Loads Tailwind for every Lab 5 component rendered on this page
import '~/labs/lab2/tailwind/utilities.css'
import Calculator from '~/labs/lab5/Calculator.vue'
import HelloRoute from '~/labs/lab5/HelloRoute.vue'
import HttpClient from '~/labs/lab5/HttpClient.vue'
import WorkingWithRemoteObjectsAsync from '~/labs/lab5/WorkingWithRemoteObjectsAsync.vue'
import WorkingWithRemoteArraysAsync from '~/labs/lab5/WorkingWithRemoteArraysAsync.vue'
import PathParameters from '~/labs/lab5/PathParameters.vue'
import QueryParameters from '~/labs/lab5/QueryParameters.vue'
import WorkingWithRemoteArrays from '~/labs/lab5/WorkingWithRemoteArrays.vue'
import WorkingWithRemoteObjects from '~/labs/lab5/WorkingWithRemoteObjects.vue'

definePageMeta({ layout: 'labs' })
const HTTP_SERVER = useRuntimeConfig().public.httpServer
</script>
<template>
  <h2>Lab 5</h2>
  <a id="wd-welcome-link" class="text-blue-700 underline" :href="`${HTTP_SERVER}/lab5/welcome`"> Welcome </a>
  <hr />
  <HttpClient />
  <WorkingWithRemoteObjectsAsync />
  <WorkingWithRemoteArraysAsync />
  <PathParameters />
  <QueryParameters />
  <WorkingWithRemoteObjects />
  <WorkingWithRemoteArrays />
  <HelloRoute />
  <Calculator />
</template>

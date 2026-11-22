<script setup lang="ts">
definePageMeta({ layout: 'labs' })
import '~/labs/lab2/tailwind/utilities.css'
const HTTP_SERVER = useRuntimeConfig().public.httpServer
</script>
<template>
  <div id="wd-lab5-environment">
    <h4>Environment</h4>
    <p>
      <code>NUXT_PUBLIC_HTTP_SERVER</code> = <code>{{ HTTP_SERVER }}</code>
    </p>
    <a id="wd-welcome-link" class="text-blue-700 underline" :href="`${HTTP_SERVER}/lab5/welcome`"> Welcome </a>
  </div>
</template>

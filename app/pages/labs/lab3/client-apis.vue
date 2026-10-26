<script setup lang="ts">
import PathnameDemo from '~/labs/lab3/client-apis/PathnameDemo.vue'
import SearchParamsDemo from '~/labs/lab3/client-apis/SearchParamsDemo.vue'
import WindowDemo from '~/labs/lab3/client-apis/WindowDemo.vue'
import GeolocationDemo from '~/labs/lab3/client-apis/GeolocationDemo.vue'
import MapEmbed from '~/labs/lab3/client-apis/MapEmbed.vue'
import ClientIpDemo from '~/labs/lab3/client-apis/ClientIpDemo.vue'

definePageMeta({ layout: 'labs' })
</script>
<template>
  <div id="wd-client-apis">
    <h2>Client-Only APIs</h2>
    <PathnameDemo />
    <SearchParamsDemo />
    <WindowDemo />
    <GeolocationDemo />
    <MapEmbed />
    <ClientIpDemo />
  </div>
</template>

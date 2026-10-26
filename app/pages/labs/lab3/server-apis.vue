<script setup lang="ts">
import ServerTimeDemo from '~/labs/lab3/server-apis/ServerTimeDemo.vue'
import OsDemo from '~/labs/lab3/server-apis/OsDemo.vue'
import EnvDemo from '~/labs/lab3/server-apis/EnvDemo.vue'
import RequestHeadersDemo from '~/labs/lab3/server-apis/RequestHeadersDemo.vue'
import WeatherDemo from '~/labs/lab3/server-apis/WeatherDemo.vue'
import VisitCounterDemo from '~/labs/lab3/server-apis/VisitCounterDemo.vue'
import ChildProcessDemo from '~/labs/lab3/server-apis/ChildProcessDemo.vue'

definePageMeta({ layout: 'labs' })
</script>
<template>
  <div id="wd-server-apis">
    <h2>Server-Only APIs</h2>
    <ServerTimeDemo />
    <OsDemo />
    <EnvDemo />
    <RequestHeadersDemo />
    <WeatherDemo />
    <VisitCounterDemo />
    <ChildProcessDemo />
  </div>
</template>

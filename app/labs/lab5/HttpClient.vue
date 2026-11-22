<script setup lang="ts">
import '~/labs/lab2/tailwind/utilities.css'
import * as client from '../lab5/client'

const welcomeOnClick = ref('')
const fetchWelcomeOnClick = async () => {
  const message = await client.fetchWelcomeMessage()
  welcomeOnClick.value = message
}

const welcomeOnLoad = ref('')
const fetchWelcomeOnLoad = async () => {
  const welcome = await client.fetchWelcomeMessage()
  welcomeOnLoad.value = welcome
}
onMounted(() => {
  fetchWelcomeOnLoad()
})
</script>
<template>
  <div id="wd-http-client">
    <h3>HTTP Client</h3>
    <h4>Requesting on Click</h4>
    <button type="button" id="wd-fetch-welcome" class="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" @click="fetchWelcomeOnClick">Fetch Welcome</button>
    <p>
      Response from server: <b>{{ welcomeOnClick }}</b>
    </p>
    <h4>Requesting on Load</h4>
    <p>
      Response from server: <b>{{ welcomeOnLoad }}</b>
    </p>
    <hr class="my-4" />
  </div>
</template>

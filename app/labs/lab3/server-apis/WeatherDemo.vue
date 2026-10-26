<script setup lang="ts">
const { data } = await useFetch('/api/lab3/server-apis/weather')
</script>
<template>
  <div id="wd-weather-demo">
    <h3>Weather in Boston (Open-Meteo)</h3>
    <ul v-if="data?.weather">
      <li>Temperature: {{ data.weather.current.temperature_2m }} °F</li>
      <li>Wind: {{ data.weather.current.wind_speed_10m }} mph</li>
      <li>Measured at (UTC): {{ data.weather.current.time }}</li>
    </ul>
    <p v-else>Weather is unavailable right now: {{ data?.error }}</p>
  </div>
</template>

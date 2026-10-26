<script setup lang="ts">
type Coords = { lat: number; lon: number }
const coords = ref<Coords | null>(null)
const status = ref('Click the button to share your location.')
const router = useRouter()

const locate = () => {
  if (!('geolocation' in navigator)) {
    status.value = 'Geolocation is not available in this browser.'
    return
  }
  status.value = 'Waiting for permission...'
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const next = {
        lat: Number(position.coords.latitude.toFixed(4)),
        lon: Number(position.coords.longitude.toFixed(4)),
      }
      coords.value = next
      status.value = 'Location found.'
      router.replace({ query: { lat: next.lat, lon: next.lon } })
    },
    (error) => {
      coords.value = null
      status.value =
        error.code === error.PERMISSION_DENIED
          ? "Permission denied. That's fine; the demo still works without it."
          : `Could not get your location: ${error.message}`
    },
    { timeout: 10000 },
  )
}
</script>
<template>
  <div id="wd-geolocation-demo">
    <h3>navigator.geolocation</h3>
    <button type="button" @click="locate">Find my location</button>
    <p>{{ status }}</p>
    <p v-if="coords">Latitude: {{ coords.lat }}, Longitude: {{ coords.lon }}</p>
  </div>
</template>

<script setup lang="ts">
const DEFAULT_LAT = 42.3398
const DEFAULT_LON = -71.0892
const route = useRoute()

const center = computed(() => {
  const lat = Number(route.query.lat ?? DEFAULT_LAT)
  const lon = Number(route.query.lon ?? DEFAULT_LON)
  const valid = Number.isFinite(lat) && Number.isFinite(lon)
  return valid ? { lat, lon } : { lat: DEFAULT_LAT, lon: DEFAULT_LON }
})
const src = computed(() => {
  const { lat, lon } = center.value
  const d = 0.01
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(',')
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`
})
</script>
<template>
  <div id="wd-map-embed">
    <h3>OpenStreetMap iframe</h3>
    <p>
      Showing {{ center.lat }}, {{ center.lon }}{{ 'lat' in route.query ? '' : ' (default location)' }}
    </p>
    <iframe title="Map" :src="src" width="100%" height="300" style="border: 0" />
  </div>
</template>

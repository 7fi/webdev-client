<script setup lang="ts">
// setResponseStatus(404)
</script>

<template>
  <div id="wd-not-found">
    <h2>Page Not Found</h2>
    <p>The requested page could not be found. Please check the page URL or return to the dashboard.</p>
    <NuxtLink to="/dashboard" id="wd-not-found-dashboard-link"> Back to Dashboard </NuxtLink>
  </div>
</template>

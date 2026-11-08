<script setup lang="ts">
import { ProfileProvider } from './ProfileContext'
import ContextProfileFormBody from './ContextProfileFormBody.vue'
</script>

<template>
  <!-- The body is a separate component: inject() only sees providers above it -->
  <ProfileProvider>
    <ContextProfileFormBody />
  </ProfileProvider>
</template>

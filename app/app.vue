<script setup lang="ts">
import { AccountProvider } from '~/kambaz/account/AccountContext'
</script>

<template>
  <NuxtRouteAnnouncer />
  <!--
    The provider sits above NuxtLayout, not inside layouts/kambaz.vue. Account pages use the
    'accounts' layout and Dashboard uses 'kambaz'; switching layouts remounts the layout, which
    would reset a provider placed there and sign the user out on the way from Sign in to Dashboard.
  -->
  <AccountProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </AccountProvider>
</template>

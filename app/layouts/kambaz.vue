<script setup lang="ts">
import KambazNavigation from '~/components/kambaz/KambazNavigation.vue'
import Session from '~/kambaz/account/Session.vue'
import '~/assets/css/kambaz.css'
</script>

<template>
  <!-- AccountProvider is in app.vue; Session needs it as an ancestor to call setCurrentUser -->
  <Session>
    <div id="wd-kambaz" class="wd-kambaz font-sans">
      <KambazNavigation />
      <div class="wd-main-content-offset p-3">
        <slot />
      </div>
    </div>
  </Session>
</template>

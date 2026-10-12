<script setup lang="ts">
import KambazNavigation from '~/components/kambaz/KambazNavigation.vue'
import '~/assets/css/kambaz.css'
</script>

<template>
  <div id="wd-kambaz" class="wd-kambaz font-sans">
    <KambazNavigation />
    <div class="wd-main-content-offset p-3">
      <slot />
    </div>
  </div>
</template>

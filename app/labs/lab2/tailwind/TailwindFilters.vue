<script setup>
const src = 'https://crowsnest.club/hero.jpeg'
</script>
<template>
  <div>
    <h2 class="text-2xl font-bold">Blurs</h2>
    <div class="flex">
      <img class="blur-none w-1/4" :src="src" alt="blur none" />
      <img class="blur-sm w-1/4" :src="src" alt="blur sm" />
      <img class="blur-lg w-1/4" :src="src" alt="blur lg" />
      <img class="blur-2xl w-1/4" :src="src" alt="blur 2xl" />
    </div>
    <h3 class="text-lg font-bold">Grayscale and brightness</h3>
    <div id="wd-ai-filters" class="flex">
      <img class="grayscale w-1/4" :src="src" alt="grayscale" />
      <img class="grayscale-0 w-1/4" :src="src" alt="grayscale 0" />
      <img class="brightness-50 w-1/4" :src="src" alt="brightness 50" />
      <img class="brightness-150 w-1/4" :src="src" alt="brightness 150" />
    </div>
    <h2 class="text-2xl font-bold">Contrast</h2>
    <div class="flex">
      <img class="blur-none w-1/4" :src="src" alt="blur none" />
      <img class="contrast-50 w-1/4" :src="src" alt="blur sm" />
      <img class="contrast-150 w-1/4" :src="src" alt="blur lg" />
      <img class="contrast-300 w-1/4" :src="src" alt="blur 2xl" />
    </div>
  </div>
</template>

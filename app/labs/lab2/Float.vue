<script setup>
const STARSHIP = 'https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg'
const LOREM = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?'
</script>
<template>
  <div id="wd-float-divs">
    <h2>Float</h2>
    <div>
      <img class="wd-float-right" :src="STARSHIP" alt="Starship" />
      {{ LOREM }} {{ LOREM }}
      <img class="wd-float-left" :src="STARSHIP" alt="Starship" />
      {{ LOREM }} {{ LOREM }}
      <img class="wd-float-right" :src="STARSHIP" alt="Starship" />
      {{ LOREM }} {{ LOREM }}
      <img class="wd-float-left" :src="STARSHIP" alt="Starship" />
      {{ LOREM }} {{ LOREM }}
      <div class="wd-float-done"></div>
      {{ LOREM }} {{ LOREM }}
      <img class="wd-float-right" :src="STARSHIP" alt="Starship" />
      {{ LOREM }} {{ LOREM }} {{ LOREM }} {{ LOREM }}
      <div class="wd-float-done"></div>
    </div>
    <div>
      <div id="wd-ai-float" class="wd-float-right wd-dimension-square wd-bg-color-green">Box</div>
      {{ LOREM }}
      <div class="wd-float-done"></div>
    </div>
    <div>
      <div class="wd-float-left wd-dimension-portrait wd-bg-color-yellow">Yellow</div>
      <div class="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">Blue</div>
      <div class="wd-float-left wd-dimension-portrait wd-bg-color-red">Red</div>
      <img class="wd-float-right" :src="STARSHIP" alt="Starship" />
      <div class="wd-float-done"></div>
    </div>
  </div>
</template>

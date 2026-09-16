<script setup lang="ts">
import HighlightedParagraph from './HighlightedParagraph.vue'
</script>

<template>
  <div id="wd-highlighted-paragraph">
    <h3>Highlighted Paragraph</h3>
    <HighlightedParagraph text="Default highlight: light yellow background, orange border." />
    <HighlightedParagraph text="Custom props: light blue background, navy border, thicker width, more rounding." background-color="lightblue" border-color="navy" border-width="4px" border-radius="16px" />
    <HighlightedParagraph text="Another variation: misty rose background, crimson border, square corners." background-color="#ffe4e1" border-color="crimson" border-width="3px" border-radius="0px" />
    <HighlightedParagraph text="I'm the captain of the northeastern sailing team!" background-color="#ccffee" border-color="#33ffcc" border-width="3px" border-radius="3px" />
  </div>
</template>

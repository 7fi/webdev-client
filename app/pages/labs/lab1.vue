<script setup>
definePageMeta({ layout: 'labs' })
import AnchorTag from '~/labs/lab1/AnchorTag.vue'
import Forms from '~/labs/lab1/forms/Forms.vue'
import HeadingTags from '~/labs/lab1/HeadingTags.vue'
import HighlightedBoxLab from '~/labs/lab1/HighlightedBoxLab.vue'
import HighlightedParagraphLab from '~/labs/lab1/HighlightedParagraphLab.vue'
import Images from '~/labs/lab1/Images.vue'
import ListTags from '~/labs/lab1/ListTags.vue'
import ParagraphTag from '~/labs/lab1/ParagraphTag.vue'
import Tables from '~/labs/lab1/Tables.vue'
</script>
<template>
  <div id="wd-lab1">
    <h2>Lab 1</h2>
    <h3>HTML Examples</h3>
    <HeadingTags />
    <ParagraphTag />
    <ListTags />
    <Tables />
    <Images />
    <Forms />
    <HighlightedParagraphLab />
    <HighlightedBoxLab />
    <AnchorTag />
  </div>
</template>

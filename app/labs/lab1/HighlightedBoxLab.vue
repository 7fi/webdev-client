<script setup lang="ts">
import HighlightedBox from './HighlightedBox.vue'
</script>

<template>
  <div id="wd-highlighted-box">
    <h3>Highlighted Box</h3>
    <HighlightedBox backgroundColor="lavender" borderColor="purple" borderWidth="3px" borderRadius="12px">
      <h4>Callout</h4>
      <p>This box wraps <strong>any</strong> children — headings, paragraphs, lists, and more.</p>
      <ul>
        <li>backgroundColor</li>
        <li>borderColor</li>
        <li>borderWidth</li>
        <li>borderRadius</li>
      </ul>
    </HighlightedBox>
    <HighlightedBox backgroundColor="#e8f5e9" borderColor="green" borderWidth="2px" borderRadius="20px">
      <p>A second box with different style props wrapping different content.</p>
    </HighlightedBox>
    <HighlightedBox backgroundColor="#eecccc" borderColor="red" borderWidth="2px" borderRadius="0">
      <h4>Carter</h4>
      <ul>
        <li>Learn Vue</li>
        <li>Work with a team</li>
        <li>Have fun</li>
      </ul>
    </HighlightedBox>
  </div>
</template>

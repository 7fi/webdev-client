<script setup lang="ts">
import Box from '~/labs/lab3/children/Box.vue'
</script>
<template>
  <div id="wd-box-demo">
    <Box>Default box</Box>
    <Box borderStyle="dashed" borderColor="blue" :borderWidth="4" :width="220" :height="80" position="relative" :padding="16" :margin="12" :borderRadius="12" boxShadow="4px 4px 8px gray"> Configured box </Box>
  </div>
</template>

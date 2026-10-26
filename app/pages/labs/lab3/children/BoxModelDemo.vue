<script setup lang="ts">
import Margin from '~/labs/lab3/children/Margin.vue'
import Border from '~/labs/lab3/children/Border.vue'
import Padding from '~/labs/lab3/children/Padding.vue'
import Content from '~/labs/lab3/children/Content.vue'
</script>
<template>
  <div id="wd-box-model-demo" style="background-color: white">
    <Margin :margin="20">
      <Border :width="6" color="black" :radius="8">
        <Padding :padding="20">
          <Content :width="120" :height="40">Hello</Content>
        </Padding>
      </Border>
    </Margin>
  </div>
</template>

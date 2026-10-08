<template>
  <div id="wd-z-index">
    <h2>Z index</h2>
    <div class="wd-pos-relative" :style="{ height: '150px' }">
      <div class="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
      <div class="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape</div>
      <div class="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
      <div class="wd-pos-absolute-50-50 wd-bg-color-green wd-dimension-portrait wd-zindex-send-to-back">test</div>
      <div id="wd-ai-zindex" class="wd-ai-zindex-top wd-bg-color-gray wd-dimension-square">AI top</div>
    </div>
    <br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<template>
  <div id="wd-css-box-model">
    <h2>Box model</h2>
    <div class="wd-box-model-parent">
      <div>parent background (shows through the margin)</div>
      <div class="wd-box-model-box">
        <span class="wd-box-model-border-label">border (the red ring)</span>
        <span class="wd-box-model-padding-label">padding</span>
        <div class="wd-box-model-content">content</div>
        <span class="wd-box-model-margin-label"> margin: the 20px gray gap (transparent) </span>
      </div>
    </div>
    <h3>box-sizing</h3>
    <div class="wd-box-sizing-demo">
      <div class="wd-box-sizing-content">content-box: width 200px plus padding and border</div>
      <div class="wd-box-sizing-border">border-box: width 200px includes padding and border</div>
      <!-- No box-sizing declared, so this uses the default (content-box) and renders 260px wide.
           Only box-sizing: border-box keeps the declared 200px width. -->
      <div class="wd-ai-box-sizing-default">default: no box-sizing set, behaves like content-box</div>
    </div>
  </div>
</template>

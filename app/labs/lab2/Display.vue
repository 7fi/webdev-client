<template>
  <div id="wd-css-display">
    <h2>Display</h2>
    <h3>Inline</h3>
    <div>
      <span class="wd-display-inline wd-bg-color-red">Inline 1</span>
      <span class="wd-display-inline wd-bg-color-yellow">Inline 2</span>
      <span class="wd-display-inline wd-bg-color-blue wd-fg-color-white"> Inline 3 </span>
    </div>
    <h3>Inline-block</h3>
    <div>
      <span class="wd-display-inline-block wd-bg-color-red"> Inline-block 1 </span>
      <span class="wd-display-inline-block wd-bg-color-yellow"> Inline-block 2 </span>
      <span class="wd-display-inline-block wd-bg-color-blue wd-fg-color-white"> Inline-block 3 </span>
    </div>
    <h3>Block</h3>
    <div>
      <span class="wd-display-block wd-bg-color-red">Block 1</span>
      <span class="wd-display-block wd-bg-color-yellow">Block 2</span>
      <span class="wd-display-block wd-bg-color-blue wd-fg-color-white"> Block 3 </span>
    </div>
    <div class="wd-display-block wd-bg-color-red" style="display: inline">
      Block div forced inline: its 150px width no longer applies
    </div>
    <div id="wd-ai-display" class="wd-display-inline wd-bg-color-green wd-fg-color-white">
      Inline div: width and height are ignored
    </div>
  </div>
</template>

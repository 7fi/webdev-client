<template>
  <div id="wd-css-flex">
    <h2>Flex</h2>
    <div class="wd-flex-row-container">
      <div class="wd-bg-color-yellow">Column 1</div>
      <div class="wd-bg-color-blue wd-fg-color-white">Column 2</div>
      <div class="wd-bg-color-red wd-fg-color-white">Column 3</div>
    </div>
    <div class="wd-flex-row-container">
      <div class="wd-bg-color-yellow">Column 1</div>
      <div class="wd-bg-color-blue wd-fg-color-white">Column 2</div>
      <div class="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Column 3</div>
    </div>
    <div class="wd-flex-row-container">
      <div class="wd-bg-color-yellow wd-width-75px">Column 1</div>
      <div class="wd-bg-color-blue wd-fg-color-white">Column 2</div>
      <div class="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Column 3</div>
    </div>
    <div class="wd-flex-row-container">
      <div class="wd-bg-color-yellow wd-flex-grow-1">Column 1</div>
      <div class="wd-bg-color-blue wd-fg-color-white">Column 2</div>
      <div class="wd-bg-color-red wd-fg-color-white wd-width-75px">Column 3</div>
    </div>
    <div id="wd-ai-flex" class="wd-flex-row-container">
      <div class="wd-bg-color-yellow wd-width-75px">Column 1</div>
      <div class="wd-bg-color-gray">Column 2</div>
      <div class="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">Column 3 (grows)</div>
    </div>
  </div>
</template>

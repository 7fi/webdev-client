<template>
  <div id="wd-css-positions">
    <h2>Positions</h2>
    <div id="wd-css-position-relative">
      <h2>Relative</h2>
      <div class="wd-bg-color-gray">
        <div class="wd-bg-color-yellow wd-dimension-portrait">
          <div class="wd-pos-relative-nudge-down-right">Portrait</div>
        </div>
        <div class="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
        <div class="wd-bg-color-red wd-dimension-square">Square</div>
        <div class="wd-bg-color-green wd-pos-relative-nudge-down-left wd-dimension-portrait">nudge</div>
        <div id="wd-ai-relative" class="wd-ai-pos-relative-nudge wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">AI nudge</div>
      </div>
    </div>
    <div id="wd-css-position-absolute">
      <h2>Absolute position</h2>
      <div class="wd-pos-relative" :style="{ height: '150px' }">
        <div class="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
        <div class="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
        <div class="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
        <div id="wd-absolute-corner" class="wd-pos-absolute-bottom-right wd-bg-color-green wd-dimension-square">Corner</div>
        <div id="wd-ai-absolute" class="wd-ai-pos-absolute-br wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Bottom right</div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
    <div id="wd-css-position-fixed">
      <h2>Fixed position</h2>
      Checkout the blue square that says &quot;Fixed position&quot; stuck all the way on the right and half way down the page. It doesn&apos;t scroll with the rest of the page. Its position is &quot;Fixed&quot;.
      <div class="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">Fixed position</div>
      <div id="wd-ai-fixed" class="wd-ai-pos-fixed wd-bg-color-green wd-fg-color-white">AI fixed</div>

      <div class="wd-pos-fixed-br wd-bg-color-blue wd-fg-color-white">badge</div>
    </div>
  </div>
</template>

<template>
  <div>
    <h2 class="text-3xl">Margin</h2>
    <div class="bg-blue-200 mb-4 p-4">This div has a bottom margin of 4.</div>
    <div class="bg-blue-200 ms-4 me-8 p-4">This div has a start margin of 4 and an end margin of 8.</div>
    <h2 class="text-3xl mt-8">Padding</h2>
    <div class="bg-green-200 ps-2 pt-4 pb-8 mb-4">This div has starting padding of 2, top padding of 4, and bottom padding of 8.</div>
    <div class="bg-green-200 p-6">This div has padding all around of 6.</div>
    <h2 class="text-3xl mt-8">Margin and Padding</h2>
    <div class="bg-gray-300 flow-root">
      <div class="bg-yellow-200 mt-6 ms-12 mb-2 ps-10 pt-2 pb-8">This div has a top margin of 6, start margin of 12, and bottom margin of 2 (gray area outside), plus start padding of 10, top padding of 2, and bottom padding of 8 (yellow area inside).</div>
    </div>
    <div class="bg-gray-300 mt-4 flow-root">
      <div id="wd-ai-spacing" class="bg-purple-200 mt-6 ps-8 pb-4">This div has a top margin of 6 (gray area above), plus start padding of 8 and bottom padding of 4 (purple area inside).</div>
    </div>
  </div>
</template>

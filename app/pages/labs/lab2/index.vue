<script setup>
import BackgroundColors from '~/labs/lab2/BackgroundColors.vue'
import Borders from '~/labs/lab2/Borders.vue'
import BoxModel from '~/labs/lab2/BoxModel.vue'
import Corners from '~/labs/lab2/Corners.vue'
import Dimensions from '~/labs/lab2/Dimensions.vue'
import Display from '~/labs/lab2/Display.vue'
import Flex from '~/labs/lab2/Flex.vue'
import Float from '~/labs/lab2/Float.vue'
import ForegroundColors from '~/labs/lab2/ForegroundColors.vue'
import GridLayout from '~/labs/lab2/GridLayout.vue'
import Margins from '~/labs/lab2/Margins.vue'
import MediaQueriesDemo from '~/labs/lab2/MediaQueriesDemo.vue'
import Padding from '~/labs/lab2/Padding.vue'
import Positions from '~/labs/lab2/Positions.vue'
import ReactIconsSampler from '~/labs/lab2/ReactIconsSampler.vue'
import ZIndex from '~/labs/lab2/ZIndex.vue'

definePageMeta({ layout: 'labs' })
</script>
<template>
  <div id="wd-lab2">
    <h2>Lab 2 - Cascading Style Sheets</h2>
    <p>
      <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
    </p>
    <h3>Styling with the STYLE attribute</h3>
    <p>Style attribute allows configuring look and feel on the element. Although its very convenient it is considered bad practice and you should avoid using the style attribute.</p>

    <p :style="{ backgroundColor: 'green', color: 'yellow' }">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, animi dolores repudiandae, excepturi aut quod possimus nisi quas, sapiente deserunt nulla dolor soluta. Neque beatae aut, in ut rem veniam?</p>
    <p id="wd-ai-style-attr" :style="{ backgroundColor: 'purple', color: 'white' }">This paragraph uses the style attribute to set a purple background and white text.</p>

    <div id="wd-css-id-selectors">
      <h3>ID selectors</h3>
      <p id="wd-id-selector-1">Instead of changing the look and feel of all the elements of the same name, e.g., P, we can refer to a specific element by its ID</p>
      <p id="wd-id-selector-2">Here's another paragraph using a different ID and a different look and feel</p>
      <p id="wd-id-selector-3">Here's another paragraph using a different ID and a different look and feel</p>
      <p id="wd-ai-id-selector">This paragraph is styled by its own ID selector with a teal background and white text</p>
    </div>
    <div id="wd-css-class-selectors">
      <h3>Class selectors</h3>
      <p class="wd-class-selector">Instead of using IDs to refer to elements, you can use an element's CLASS attribute</p>
      <h4 class="wd-class-selector">This heading has same style as paragraph above</h4>
      <p class="wd-ai-class-selector">This paragraph is styled by the wd-ai-class-selector class with a maroon background and white text</p>
      <h4 class="wd-ai-class-selector">This heading shares the same class and style as the paragraph above</h4>
      <p class="wd-your-class">Instead of using IDs to refer to elements, you can use an element's CLASS attribute</p>
      <h4 class="wd-your-class">This heading has same style as paragraph above</h4>
    </div>

    <div id="wd-css-document-structure">
      <div class="wd-selector-1">
        <h3>Document structure selectors</h3>
        <div class="wd-selector-2">
          Selectors can be combined to refer elements in particular places in the document
          <p class="wd-selector-3">
            This paragraph's red background is referenced as
            <br />
            .selector-2 .selector3
            <br />
            meaning the descendant of some ancestor.
            <br />
            <span class="wd-selector-4"> Whereas this span is a direct child of its parent </span>
            <span class="wd-selector-6"> Whereas this span is a direct child of its parent </span>
            <br />
            <span class="wd-ai-selector-5"> This span is matched as a descendant of .wd-selector-1 </span>
            <br />
            You can combine these relationships to create specific styles depending on the document structure
          </p>
        </div>
      </div>
    </div>

    <div id="wd-css-cascade">
      <h3>Cascade and specificity</h3>
      <p id="wd-ai-cascade" class="wd-ai-cascade">This paragraph is matched by a tag, a class, and an ID rule. The ID rule wins, so the background is red.</p>
    </div>
    <ForegroundColors />
    <BackgroundColors />
    <Borders />
    <Padding />
    <Margins />
    <BoxModel />
    <Corners />
    <Dimensions />
    <Display />
    <Positions />
    <ZIndex />
    <Float />
    <GridLayout />
    <Flex />
    <MediaQueriesDemo />
    <ReactIconsSampler />
  </div>
</template>

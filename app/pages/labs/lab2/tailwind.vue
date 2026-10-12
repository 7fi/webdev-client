<script setup lang="ts">
import TailwindBackgroundColors from '~/labs/lab2/tailwind/TailwindBackgroundColors.vue'
import TailwindFilters from '~/labs/lab2/tailwind/TailwindFilters.vue'
import TailwindGrids from '~/labs/lab2/tailwind/TailwindGrids.vue'
import TailwindResponseiveGrid from '~/labs/lab2/tailwind/TailwindResponseiveGrid.vue'
import TailwindResponsiveBreakpoint from '~/labs/lab2/tailwind/TailwindResponsiveBreakpoint.vue'
import TailwindResponsiveDesign from '~/labs/lab2/tailwind/TailwindResponsiveDesign.vue'
import TailwindResponsiveFlex from '~/labs/lab2/tailwind/TailwindResponsiveFlex.vue'
import TailwindResponsiveShowHide from '~/labs/lab2/tailwind/TailwindResponsiveShowHide.vue'
import TailwindResponsiveSpacingText from '~/labs/lab2/tailwind/TailwindResponsiveSpacingText.vue'
import TailwindSpacing from '~/labs/lab2/tailwind/TailwindSpacing.vue'
import TailwindTypography from '~/labs/lab2/tailwind/TailwindTypography.vue'
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-8">Tailwind CSS</h1>
  </div>
  <TailwindSpacing />
  <hr className="my-8" />
  <TailwindTypography />
  <hr className="my-8" />
  <TailwindBackgroundColors />
  <hr className="my-8" />
  <TailwindResponsiveBreakpoint />
  <hr className="my-8" />
  <TailwindResponsiveShowHide />
  <hr className="my-8" />
  <TailwindResponsiveFlex />
  <hr className="my-8" />
  <TailwindResponseiveGrid />
  <hr className="my-8" />
  <TailwindResponsiveSpacingText />
  <hr className="my-8" />
  <TailwindResponsiveDesign />
  <hr className="my-8" />
  <TailwindFilters />
  <hr className="my-8" />
  <TailwindGrids />
</template>

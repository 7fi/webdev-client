<template>
  <div>
    <h2 class="text-2xl font-bold">Tailwind Grids</h2>
    <div>
      <h3 class="mt-6 text-lg font-bold">4 Columns Grid</h3>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="n in 9" :key="n" class="text-center bg-blue-300 p-3">
          {{ String(n).padStart(2, '0') }}
        </div>
      </div>
    </div>
    <div>
      <h3 class="mt-6 text-lg font-bold">3 Columns Grid</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="text-center bg-blue-300 p-3">01</div>
        <div class="text-center bg-blue-300 p-3">02</div>
        <div class="text-center bg-blue-300 p-3">03</div>
        <div class="col-span-2 text-center bg-blue-300 p-3">04</div>
        <div class="text-center bg-blue-300 p-3">05</div>
        <div class="text-center bg-blue-300 p-3">06</div>
        <div class="col-span-2 text-center bg-blue-300 p-3">07</div>
      </div>
    </div>
    <div id="wd-tailwind-grid-system" class="mt-6">
      <h2 class="text-2xl font-bold">Grid system</h2>
      <div class="grid grid-cols-2 gap-2">
        <div class="bg-red-500 text-white">
          <h3 class="text-lg font-bold">Left half</h3>
        </div>
        <div class="bg-blue-500 text-white">
          <h3 class="text-lg font-bold">Right half</h3>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-4 bg-yellow-500">
          <h3 class="text-lg font-bold">One third</h3>
        </div>
        <div class="col-span-8 bg-green-500 text-white">
          <h3 class="text-lg font-bold">Two thirds</h3>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-2 bg-black text-white">
          <h3 class="text-lg font-bold">Sidebar</h3>
        </div>
        <div class="col-span-8 bg-gray-500 text-white">
          <h3 class="text-lg font-bold">Main content</h3>
        </div>
        <div class="col-span-2 bg-blue-400">
          <h3 class="text-lg font-bold">Sidebar</h3>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-3 bg-purple-500 text-white">
          <h3 class="text-lg font-bold">One quarter</h3>
        </div>
        <div class="col-span-9 bg-teal-500 text-white">
          <h3 class="text-lg font-bold">Three quarters</h3>
        </div>
      </div>
      <div id="wd-ai-grid" class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-3 bg-orange-400">
          <h3 class="text-lg font-bold">Narrow column</h3>
        </div>
        <div class="col-span-9 bg-indigo-700 text-white">
          <h3 class="text-lg font-bold">Wide column</h3>
        </div>
      </div>
    </div>
  </div>
</template>

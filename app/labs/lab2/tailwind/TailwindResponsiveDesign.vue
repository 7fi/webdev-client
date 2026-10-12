<template>
  <div class="font-sans">
    <h2 class="text-3xl font-bold mb-4">Responsive Design</h2>
    <div class="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div class="md:flex">
        <div class="relative md:w-48 md:shrink-0">
          <img class="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48" src="/images/reactjs.jpg" alt="React JS" />
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
            <svg viewBox="0 0 24 24" class="h-24 w-24" aria-hidden="true">
              <circle cx="12" cy="12" r="2.05" fill="currentColor" />
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
              </g>
            </svg>
            <div class="mt-2 text-2xl font-semibold">React JS</div>
          </div>
        </div>
        <div class="min-w-0 p-8">
          <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase md:text-red-500">Professional Courses</div>
          <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"> Rocket Propulsion Fundamentals </a>
          <p class="mt-2 text-gray-500">An in-depth study of the fundamentals of rocket propulsion...</p>
        </div>
      </div>
    </div>
    <div id="wd-ai-responsive" class="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-indigo-50">
      <div class="md:flex">
        <div class="relative md:w-48 md:shrink-0">
          <img class="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48" src="/images/reactjs.jpg" alt="React JS" />
          <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
            <svg viewBox="0 0 24 24" class="h-24 w-24" aria-hidden="true">
              <circle cx="12" cy="12" r="2.05" fill="currentColor" />
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
              </g>
            </svg>
            <div class="mt-2 text-2xl font-semibold">React JS</div>
          </div>
        </div>
        <div class="min-w-0 p-8">
          <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Professional Courses</div>
          <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"> Rocket Propulsion Fundamentals </a>
          <p class="mt-2 text-gray-500">An in-depth study of the fundamentals of rocket propulsion...</p>
        </div>
      </div>
    </div>
  </div>
</template>

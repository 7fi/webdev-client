<script setup>
definePageMeta({ layout: 'labs' })
</script>
<template>
  <div id="wd-labs">
    <h1>Labs</h1>
    <ul>
      <li>
        <NuxtLink to="/labs/lab1">Lab 1: HTML Examples</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/labs/lab2">Lab 2: CSS Basics</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/labs/lab3">Lab 3: JavaScript Fundamentals</NuxtLink>
      </li>
      <li>
        <NuxtLink id="wd-lab4-link" to="/labs/lab4">Lab 4: ?</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/labs/lab5">Lab 5: ?</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Kambaz</NuxtLink>
      </li>
    </ul>
    <NuxtPage />
  </div>
</template>

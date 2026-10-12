<script setup>
import { FaCheckCircle, FaCircle } from 'vue3-icons/fa'
</script>

<template>
  <span class="relative me-1 inline-flex">
    <FaCheckCircle class="absolute text-xl text-green-600" :style="{ top: '2px' }" />
    <FaCircle class="text-base text-white" />
  </span>
</template>

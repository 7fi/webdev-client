<script setup lang="ts">
const { course } = defineProps<{ course: { name: string } | undefined }>()
const route = useRoute()
const label = computed(() => {
  const section = route.path.split('/').pop() ?? ''
  if (section === 'table') return 'People'
  return section.charAt(0).toUpperCase() + section.slice(1)
})
</script>

<template>
  <span>{{ course?.name }} &gt; {{ label }}</span>
</template>

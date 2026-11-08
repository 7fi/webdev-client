<script setup lang="ts">
import { computed } from 'vue'
import type { ProfileErrors } from './profile'

const props = defineProps<{
  id: string
  submitted: boolean
  errors: ProfileErrors
}>()

const count = computed(() => Object.keys(props.errors).length)
</script>

<template>
  <template v-if="submitted">
    <div
      v-if="count === 0"
      :id="id"
      role="status"
      class="mb-3 rounded bg-green-100 p-2 text-green-800"
    >
      Profile saved.
    </div>
    <div v-else :id="id" role="alert" class="mb-3 rounded bg-red-100 p-2 text-red-800">
      Please fix {{ count }} {{ count === 1 ? 'field' : 'fields' }} below.
    </div>
  </template>
</template>

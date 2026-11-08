<script lang="ts" setup>
const firstName = ref('John')
const lastName = ref('Pork')
const nickName = ref('JP')
</script>
<template>
  <div id="wd-string-state-variables">
    <h2>String State Variables</h2>
    <p>{{ firstName }} "{{ nickName }}" {{ lastName }}</p>
    <input class="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" v-model="firstName" id="wd-first-name" />
    <input class="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" v-model="lastName" id="wd-last-name" />
    <input class="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5" v-model="nickName" id="wd-nick-name" />
    <hr />
  </div>
</template>

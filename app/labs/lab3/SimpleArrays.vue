<script setup lang="ts">
var functionScoped = 2
let blockScoped = 5
const constant1 = functionScoped - blockScoped
let numberArray1 = [1, 2, 3, 4, 5]
let stringArray1 = ['string1', 'string2']
let htmlArray1 = ['Buy milk', 'Feed the pets', 'submit assignment', 'Call the dentist']
let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1]
</script>
<template>
  <div id="wd-simple-arrays">
    <h4>Simple Arrays</h4>
    numberArray1 = {{ numberArray1 }} <br />
    stringArray1 = {{ stringArray1 }} <br />
    variableArray1 = {{ variableArray1 }} <br />
    Todo list:
    <ol>
      <li v-for="(item, index) in htmlArray1" :key="index">{{ item }}</li>
    </ol>
    <hr />
  </div>
</template>

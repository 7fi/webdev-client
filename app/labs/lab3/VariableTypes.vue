<script lang="ts" setup>
let numberVariable = 123
let floatingPointNumber = 234.345
let stringVariable = 'Hello World!'
let booleanVariable = true

let secondString = 'second string'
let secondNumber = 456

let isNumber = typeof numberVariable
let isString = typeof stringVariable
let isBoolean = typeof booleanVariable

let isStringSecond = typeof secondString
let isNumberSecond = typeof secondNumber

let sampleCount = 42
let sampleLabel = 'Lab 3'
let isSampleCount = typeof sampleCount
let isSampleLabel = typeof sampleLabel
</script>
<template>
  <div id="wd-variable-types">
    <h4>Variables Types</h4>
    numberVariable = {{ numberVariable }} <br />
    floatingPointNumber = {{ floatingPointNumber }} <br />
    stringVariable = {{ stringVariable }} <br />
    second stringVariable = {{ secondString }} <br />
    second numberVariable = {{ secondNumber }} <br />
    booleanVariable = {{ booleanVariable + '' }} <br />
    isNumber = {{ isNumber }} <br />
    isString = {{ isString }} <br />
    isBoolean = {{ isBoolean }} <br />
    isNumberSecond = {{ isNumberSecond }} <br />
    isStringSecond = {{ isStringSecond }} <br />
    sampleCount = {{ sampleCount }} <br />
    sampleLabel = {{ sampleLabel }} <br />
    isSampleCount = {{ isSampleCount }} <br />
    isSampleLabel = {{ isSampleLabel }}
    <hr />
  </div>
</template>

<script lang="ts" setup>
var functionScoped = 2
let blockScoped = 5
const constant1 = functionScoped - blockScoped

let name = 'Carter'
let greeting = 'Hello world!'
const sampleSum = functionScoped + blockScoped
</script>
<template>
  <div id="wd-variables-and-constants">
    <h4>Variables and Constants</h4>
    functionScoped = {{ functionScoped }} <br />
    blockScoped = {{ blockScoped }} <br />
    constant1 = {{ constant1 }} <br />
    name = {{ name }} <br />
    greeting = {{ greeting }} <br />
    sampleSum = {{ sampleSum }}
    <hr />
  </div>
</template>

<script setup lang="ts">
function add(a: number, b: number) {
  return a + b
}
const twoPlusFour = add(2, 4)
console.log(twoPlusFour)

function subtract(a: number, b: number) {
  return a - b
}
const tenMinusThree = subtract(10, 3)

function multiply(a: number, b: number) {
  return a * b
}
const threeTimesSeven = multiply(3, 7)
console.log(threeTimesSeven)
</script>
<template>
  <div id="wd-legacy-functions">
    <h4>Functions</h4>
    <h5>Legacy ES5 functions</h5>
    twoPlusFour = {{ twoPlusFour }} <br />
    add(2, 4) = {{ add(2, 4) }} <br />
    tenMinusThree = {{ tenMinusThree }} <br />
    threeTimesSeven = {{ threeTimesSeven }} <br />
    multiply(3, 7) = {{ multiply(3, 7) }}
    <hr />
  </div>
</template>

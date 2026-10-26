<script setup lang="ts">
const subtract = (a: number, b: number) => {
  return a - b
}

const threeMinusOne = subtract(3, 1)
console.log(threeMinusOne)

const add = (a: number, b: number) => {
  return a + b
}

const multiply = (a: number, b: number) => {
  return a * b
}
</script>
<template>
  <div id="wd-arrow-functions">
    <h4>New ES6 arrow functions</h4>
    threeMinusOne = {{ threeMinusOne }} <br />
    subtract(3, 1) = {{ subtract(3, 1) }} <br />
    add(2, 4) = {{ add(2, 4) }} <br />
    multiply(3, 4) = {{ multiply(3, 4) }}
    <hr />
  </div>
</template>

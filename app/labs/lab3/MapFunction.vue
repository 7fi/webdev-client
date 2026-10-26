<script setup lang="ts">
let numberArray1 = [1, 2, 3, 4, 5, 6]
const square = (a: number) => a * a
const todos = ['Buy milk', 'Feed the pets', 'submit assignment', 'Email the TA']
const squares = numberArray1.map(square)
const cubes = numberArray1.map((a) => a * a * a)
</script>
<template>
  <div id="wd-map-function">
    <h4>Map Function</h4>
    squares = {{ squares }} <br />
    cubes = {{ cubes }} <br />
    doubles = {{ numberArray1.map((a) => a * 2) }} <br />
    Todos:
    <ol>
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ol>
    <hr />
  </div>
</template>

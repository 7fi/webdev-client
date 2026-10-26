<script setup lang="ts">
let stringArray1 = ['string1', 'string3']
let stringArray2: string[] = []
let stringArray3: string[] = []
let stringLengths: number[] = []
for (const string1 of stringArray1) {
  stringArray2.push(string1.toUpperCase())
  stringArray3.push(string1.toLowerCase())
  stringLengths.push(string1.length)
}
</script>
<template>
  <div id="wd-for-loops">
    <h4>Looping through arrays</h4>
    stringArray2 = {{ stringArray2 }} <br />
    stringLengths = {{ stringLengths }} <br />
    stringArray3 = {{ stringArray3 }}
    <hr />
  </div>
</template>

<script setup lang="ts">
const nullValue: string | null = null
const undefinedValue: string | undefined = undefined

const nullType = typeof nullValue
const undefinedType = typeof undefinedValue

const nullValuexDefault = nullValue ?? 'default'
</script>
<template>
  <div id="wd-null-undefined">
    <h4>Null vs Undefined</h4>
    nullValue = {{ String(nullValue) }} <br />
    undefinedValue = {{ String(undefinedValue) }} <br />
    typeof nullValue = {{ nullType }} <br />
    typeof undefinedValue = {{ undefinedType }} <br />
    String(null) = {{ String(null) }} <br />
    String(undefined) = {{ String(undefined) }} <br />
    nullValue ?? "default" = {{ nullValuexDefault }} <br />
    null == undefined = {{ String(null == undefined) }} <br />
    null === undefined = {{ String(null === undefined) }}
    <hr />
  </div>
</template>

<script setup lang="ts">
import AnyVsUnknown from '~/labs/lab3/types/AnyVsUnknown.vue'
import Enums from '~/labs/lab3/types/Enums.vue'
import FunctionTypes from '~/labs/lab3/types/FunctionTypes.vue'
import Interfaces from '~/labs/lab3/types/Interfaces.vue'
import Narrowing from '~/labs/lab3/types/Narrowing.vue'
import ObjectTypes from '~/labs/lab3/types/ObjectTypes.vue'
import TypeAnnotations from '~/labs/lab3/types/TypeAnnotations.vue'
import TypedProps from '~/labs/lab3/types/TypedProps.vue'
import UnionTypes from '~/labs/lab3/types/UnionTypes.vue'
import UtilityTypes from '~/labs/lab3/types/UtilityTypes.vue'

definePageMeta({ layout: 'labs' })
</script>

<template>
  <div id="wd-lab3-types" className="p-4">
    <h2>TypeScript Types</h2>
    <TypeAnnotations />
    <ObjectTypes />
    <Interfaces />
    <UnionTypes />
    <Enums />
    <FunctionTypes />
    <TypedProps />
    <Narrowing />
    <AnyVsUnknown />
    <UtilityTypes />
  </div>
</template>

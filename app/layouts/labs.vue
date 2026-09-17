<script setup>
import TOC from '~/labs/TOC.vue'
</script>
<template>
  <table>
    <tbody>
      <tr>
        <td valign="top" width="100px">
          <TOC />
        </td>
        <td valign="top">
          <slot />
        </td>
      </tr>
    </tbody>
  </table>
</template>

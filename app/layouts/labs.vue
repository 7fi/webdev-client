<script setup>
import TOC from '~/labs/TOC.vue'
import '~/assets/css/labs.css'
</script>
<template>
  <div class="wd-labs">
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
  </div>
</template>

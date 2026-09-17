<script setup lang="ts">
import Status from '~/components/kambaz/course/Status.vue'
import Modules from './modules.vue'

definePageMeta({ layout: 'course' })
</script>
<template>
  <div id="wd-home">
    <table>
      <tbody>
        <tr>
          <td valign="top" width="70%">
            <Modules />
          </td>
          <td valign="top">
            <Status />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

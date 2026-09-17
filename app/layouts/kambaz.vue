<script setup lang="ts">
import KambazNavigation from '~/components/kambaz/KambazNavigation.vue'
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td valign="top" width="200">
          <KambazNavigation />
        </td>
        <td valign="top" width="100%">
          <slot />
        </td>
      </tr>
    </tbody>
  </table>
</template>

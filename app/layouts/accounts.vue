<script setup lang="ts">
import AccountNavigation from '~/components/kambaz/account/AccountNavigation.vue'
</script>

<template>
  <div id="wd-kambaz-account">
    <table>
      <tbody>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top" width="100%"><slot /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

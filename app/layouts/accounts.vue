<script setup lang="ts">
import AccountNavigation from '~/components/kambaz/account/AccountNavigation.vue'
</script>

<template>
  <NuxtLayout name="kambaz">
    <div id="wd-kambaz-account">
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <AccountNavigation />
            </td>
            <td valign="top" width="100%"><slot /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </NuxtLayout>
</template>

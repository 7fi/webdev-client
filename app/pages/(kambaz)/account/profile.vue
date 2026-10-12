<script setup lang="ts">
definePageMeta({ layout: 'accounts' })
</script>

<template>
  <div id="wd-profile-screen" class="max-w-sm">
    <h1 class="mb-3 text-2xl font-semibold">Profile</h1>
    <input defaultValue="alice" placeholder="username" class="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <input defaultValue="123" placeholder="password" type="password" class="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" class="mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" class="mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <input defaultValue="2000-01-01" type="date" id="wd-dob" class="mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <input defaultValue="alice@wonderland" type="email" id="wd-email" class="mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
    <!-- <select> has no defaultValue DOM property, so mark the default option instead -->
    <select id="wd-role" class="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2">
      <option value="USER">User</option>
      <option value="ADMIN">Admin</option>
      <option value="FACULTY" selected>Faculty</option>
      <option value="STUDENT">Student</option>
    </select>
    <NuxtLink id="wd-signout-btn" to="/account/signin" class="mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-white no-underline"> Sign out </NuxtLink>
  </div>
</template>

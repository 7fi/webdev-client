<script setup lang="ts">
import ProfileForm from '~/labs/lab4/profile/ProfileForm.vue'
import ContextProfileForm from '~/labs/lab4/context/ContextProfileForm.vue'
import PiniaProfileForm from '~/labs/lab4/pinia/PiniaProfileForm.vue'

definePageMeta({ layout: 'labs' })
</script>

<template>
  <div id="wd-lab4-profile-forms">
    <h1>Profile Form: three ways to hold state</h1>
    <ProfileForm />
    <hr />
    <ContextProfileForm />
    <hr />
    <PiniaProfileForm />
  </div>
</template>

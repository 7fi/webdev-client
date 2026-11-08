<script setup lang="ts">
import { useAccountContext } from '~/kambaz/account/AccountContext'

const { currentUser } = useAccountContext()

// /account goes to Profile when someone is signed in, otherwise to Sign in
await navigateTo(currentUser.value ? '/account/profile' : '/account/signin', { replace: true })
</script>

<template></template>

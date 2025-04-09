<template>
  <h3>User info</h3>
  <UserDetail :user="user" />
</template>

<script setup>
import UserDetail from '@/components/UserDetail.vue'
import { useUserInfoStore } from '@/stores/userInfo'
const userinfo = useUserInfoStore()
const user = userinfo.userInfo
</script>

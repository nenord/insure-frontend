<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
import { useUserInfoStore } from '../stores/userInfo.js'
import { useTokenStore } from '../stores/token.js'

const userinfo = useUserInfoStore()
const token = useTokenStore()

onMounted(async () => {
  if (token.token.access_token) {
    try {
      const response = await axios.get(
        'https://insure2-htd9edh8cec2gsf0.canadacentral-01.azurewebsites.net/whoami',
        {
          headers: {
            Authorization: `Bearer ${token.token.access_token}`,
          },
        },
      )
      userinfo.setUserInfo(response.data)
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  }
})
</script>

<template>
  <div class="greetings">
    <template v-if="token.token.access_token">
      <h3>Welcome back {{ userinfo.userInfo.first_name }}!</h3>
    </template>
    <template v-else>
      <h3>Please log in to continue.</h3>
    </template>
  </div>
</template>

<style scoped></style>

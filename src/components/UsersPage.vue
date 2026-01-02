<template>
  <h2>Users info</h2>
  <div v-for="user in users" :key="user._id">
    <router-link :to="{ name: 'User', params: { id: user._id } }">
      <h4>{{ user.first_name }} {{ user.last_name }}</h4>
    </router-link>
  </div>
</template>

<script setup>
import { useTokenStore } from '../stores/token.js'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const token = useTokenStore()
const users = ref({})

onMounted(async () => {
  if (token.token.access_token) {
    try {
      const response = await axios.get(
        'https://insure2-htd9edh8cec2gsf0.canadacentral-01.azurewebsites.net/users',
        {
          headers: {
            Authorization: `Bearer ${token.token.access_token}`,
          },
        },
      )
      users.value = response.data
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  }
})
</script>

<template>
  <h2>Policies info</h2>
  <div v-for="policy in policies" :key="policy._id">
    <router-link :to="{ name: 'Policy', params: { id: policy._id } }">
      <h4>{{ policy.make }} - {{ policy.model }}</h4>
    </router-link>
  </div>
</template>

<script setup>
import { useTokenStore } from '../stores/token.js'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const token = useTokenStore()
const policies = ref({})

onMounted(async () => {
  if (token.token.access_token) {
    try {
      const response = await axios.get(
        'https://insure2-htd9edh8cec2gsf0.canadacentral-01.azurewebsites.net/policies',
        {
          headers: {
            Authorization: `Bearer ${token.token.access_token}`,
          },
        },
      )
      policies.value = response.data
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  }
})
</script>

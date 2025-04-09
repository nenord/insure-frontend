<template>
  <h3>Policies info</h3>
  <div v-for="policy in policies" :key="policy.id">
    <PolicyDetail :policy="policy" />
  </div>
</template>

<script setup>
import PolicyDetail from '@/components/PolicyDetail.vue'
import { useTokenStore } from '../stores/token.js'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const token = useTokenStore()
const policies = ref({})

onMounted(async () => {
  if (token.token.access_token) {
    try {
      const response = await axios.get('http://localhost:8000/policies', {
        headers: {
          Authorization: `Bearer ${token.token.access_token}`,
        },
      })
      policies.value = response.data
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  }
})
</script>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTokenStore } from '../stores/token.js'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import PolicyDetail from '@/components/PolicyDetail.vue'

const policy_id = computed(() => {
  const route = useRoute()
  return route.params.id
})

const token = useTokenStore()
const policy = ref({})

onMounted(async () => {
  if (token.token.access_token) {
    try {
      const response = await axios.get(
        `https://insure2-htd9edh8cec2gsf0.canadacentral-01.azurewebsites.net/policies/${policy_id.value}`,
        {
          headers: {
            Authorization: `Bearer ${token.token.access_token}`,
          },
        },
      )
      policy.value = response.data
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  }
})
</script>

<template>
  <PolicyDetail :policy="policy" />
</template>

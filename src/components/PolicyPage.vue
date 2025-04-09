<template>
  <div>
    <p>a{{ policy_id }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const policy_id = computed(() => {
  const route = useRoute()
  return route.params.id
})
</script>

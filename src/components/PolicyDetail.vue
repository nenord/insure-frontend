<script setup>
const props = defineProps({ policy: { type: Object, required: true } })
</script>

<template>
  <div class="details">
    <h3>Policy {{ props.policy._id }} details:</h3>
    <p>User ID: {{ props.policy.user_id }}</p>
    <p>Car brand: {{ props.policy.make }}</p>
    <p>Car model: {{ props.policy.model }}</p>
    <p>Car year: {{ props.policy.year }}</p>
    <p>Agreed mileage: {{ props.policy.agreed_milage }}</p>
    <p>Mileage used up to date:</p>
    <p v-for="(value, key) in props.policy.mileage_used" :key="key">
      - Used {{ value }} miles on {{ key.slice(0, 10) }}!
    </p>
  </div>
</template>

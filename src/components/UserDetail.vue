<script setup>
const props = defineProps({ user: { type: Object, required: true } })
</script>

<template>
  <div>
    <p>Name: {{ props.user.first_name }}</p>
    <p>Last name: {{ props.user.last_name }}</p>
    <p>Email: {{ props.user.email }}</p>
    <p>Role: {{ props.user.role }}</p>
    <p>ID: {{ props.user._id }}</p>
  </div>
</template>

<script setup>
const props = defineProps({ user: { type: Object, required: true } })
</script>

<template>
  <div>
    <h3>User info</h3>
    <p>{{ props.user }}</p>
  </div>
</template>

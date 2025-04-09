<script setup>
const props = defineProps({ user: { type: Object, required: true } })
</script>

<template>
  <div>
    <p>{{ props.user }}</p>
  </div>
</template>

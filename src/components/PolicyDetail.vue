<script setup>
const props = defineProps({ policy: { type: Object, required: true } })
</script>

<template>
  <div>
    <p>{{ props.policy }}</p>
  </div>
</template>

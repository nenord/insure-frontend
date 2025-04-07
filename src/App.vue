<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div>
    <NavBar />
  </div>
  <div class="main-content">
    <router-view />
  </div>
</template>

<style scoped>
.main-content {
  padding: 20px;
}
</style>

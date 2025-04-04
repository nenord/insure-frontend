<script setup>
import HelloWorld from './components/HomePage.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div>
    <NavBar />
  </div>
  <div class="main-content">
    <HelloWorld msg="Welcome!" />
  </div>
</template>

<style scoped>
.main-content {
  padding: 20px;
}
</style>

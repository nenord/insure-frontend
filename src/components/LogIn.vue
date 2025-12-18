<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="logIn">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  <div class="center">
    <h3 v-if="errorMessage">{{ errorMessage }}</h3>
  </div>
  <div class="center">
    <p>Don't have an account? <router-link to="/createuser">Create one here</router-link></p>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useTokenStore } from '../stores/token.js'
import { ref } from 'vue'
import router from '@/router/index.js'

const token = useTokenStore()

const email = ref()
const password = ref()
const errorMessage = ref('')

const logIn = async () => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8080/token',
      {
        username: email.value,
        password: password.value,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    if (response.status === 200) {
      token.token = response.data
      console.log(response.data)
      errorMessage.value = ''
      router.push('/')
    } else {
      console.error('Error: Unexpected response status', response.status)
      token.token = {}
    }
  } catch (error) {
    console.error('Error: Unable to log in', error.response.data)
    errorMessage.value = error.response.data.detail
    token.token = {}
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  padding-right: 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.center {
  margin: auto;
  text-align: center;
}
</style>

<template>
  <div class="login">
    <h1>New user</h1>
    <form @submit.prevent="createUser">
      <div>
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" v-model="first_name" required />
      </div>
      <div>
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="last_name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Create user</button>
    </form>
  </div>
  <div class="center">
    <h3 v-if="errorMessage">{{ errorMessage }}</h3>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import router from '@/router/index.js'

const email = ref()
const password = ref()
const first_name = ref()
const last_name = ref()
const errorMessage = ref('')

const createUser = async () => {
  try {
    const response = await axios.post(
      'https://http://127.0.0.1:8080/users',
      {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (response.status === 201) {
      console.log('User created successfully', response.data)
      errorMessage.value = ''
      router.push('/login')
    } else {
      console.error('Error: Unexpected response status', response.status)
    }
  } catch (error) {
    console.error('Error', error.response.data)
    errorMessage.value =
      error.response.data.detail[0].loc[1] + ': ' + error.response.data.detail[0].msg
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

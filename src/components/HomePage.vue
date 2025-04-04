<script setup>
import axios from 'axios'
import { useUserInfoStore } from '../stores/userInfo.js'
import { useTokenStore } from '../stores/token.js'
import { ref } from 'vue'

const userinfo = useUserInfoStore()
const token = useTokenStore()
const email = ref()
const password = ref()
const errorMessage = ref('')

const logIn = async () => {
  try {
    const response = await axios.post(
      'http://localhost:8000/token',
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

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
  <div class="greetings">
    <template v-if="token.token.access_token">
      <h3>Welcome back {{ token.token }} {{ userinfo }}!</h3>
    </template>
    <template v-else>
      <h3>Please log in to continue.</h3>
    </template>
  </div>
  <div class="login-form">
    <label for="email">Email</label>
    <input id="email" v-model="email" type="email" />
    <br /><br />
    <label for="password">Password:</label>
    <input id="password" v-model="password" type="text" />
    <br /><br />
    <button @click="logIn">Login</button>
    <br />
    <h3 v-if="errorMessage">{{ errorMessage }}</h3>
  </div>
</template>

<style scoped></style>

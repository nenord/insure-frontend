<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li v-if="token.token.access_token">
      <router-link to="/profile">Profile</router-link>
    </li>
    <li v-if="token.token.access_token">
      <router-link to="/policies">Policies</router-link>
    </li>
    <li v-if="userinfo.userInfo.role === 'admin'">
      <router-link to="/users">Users</router-link>
    </li>
    <li v-if="token.token.access_token" style="float: right">
      <router-link to="/logout" class="active">Logout</router-link>
    </li>
    <li v-else style="float: right"><router-link to="/login" class="active">Login</router-link></li>
  </ul>
</template>

<script setup>
import { useTokenStore } from '../stores/token.js'
const token = useTokenStore()
import { useUserInfoStore } from '@/stores/userInfo'
const userinfo = useUserInfoStore()
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04aa6d;
}
</style>

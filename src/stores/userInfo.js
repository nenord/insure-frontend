import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref({})

  function updateUserInfo(newInfo) {
    userInfo.value = { ...userInfo.value, ...newInfo }
  }

  return {
    userInfo,
    updateUserInfo,
  }
})

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref({})

  function setUserInfo(newInfo) {
    userInfo.value = { ...userInfo.value, ...newInfo }
  }

  return {
    userInfo,
    setUserInfo,
  }
})

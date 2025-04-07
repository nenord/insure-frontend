<script setup>
import router from '@/router/index.js'
import { useTokenStore } from '../stores/token.js'
import { useUserInfoStore } from '../stores/userInfo.js'
const token = useTokenStore()
const userinfo = useUserInfoStore()
userinfo.setUserInfo({})
token.token = {}
router.push('/login')
</script>

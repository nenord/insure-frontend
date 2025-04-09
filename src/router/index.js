import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LogIn from '@/components/LogIn.vue'
import LogOut from '@/components/LogOut.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import PoliciesPage from '@/components/PoliciesPage.vue'
import PolicyPage from '@/components/PoliciesPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LogIn,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogOut,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage,
    },
    {
      path: '/policies',
      name: 'Policies',
      component: PoliciesPage,
    },
    {
      path: '/policys/:id',
      name: 'Policy',
      component: PolicyPage,
    },
  ],
})

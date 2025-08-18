import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import LogIn from '@/components/LogIn.vue'
import LogOut from '@/components/LogOut.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import PoliciesPage from '@/components/PoliciesPage.vue'
import PolicyPage from '@/components/PolicyPage.vue'
import UsersPage from '@/components/UsersPage.vue'
import UserPage from '@/components/UserPage.vue'
import CreateUser from '@/components/CreateUser.vue'

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
      path: '/policy/:id',
      name: 'Policy',
      component: PolicyPage,
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersPage,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: UserPage,
    },
    {
      path: '/createuser',
      name: 'Createuser',
      component: CreateUser,
    },
  ],
})

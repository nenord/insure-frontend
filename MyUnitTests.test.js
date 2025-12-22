import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, it, expect } from 'vitest'
import HomePage from '@/components/HomePage.vue'
import LogIn from '@/components/LogIn.vue'
import { useTokenStore } from '@/stores/token.js'

describe('HomePage.vue', () => {
  const token = useTokenStore(createPinia())
  it('Home page mounts properly', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toContain('Please log in to continue.')
  })
})

describe('LogIn.vue', () => {
  const token = useTokenStore(createPinia())
  it('Displays the correct message', () => {
    const wrapper = mount(LogIn)
    expect(wrapper.text()).toContain('Login')
  })
})

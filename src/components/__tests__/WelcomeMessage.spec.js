import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WelcomeMessage from '../WelcomeMessage.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomeMessage)
    expect(wrapper.text()).toContain('Welcome to the Thank You Card Generator!')
  })
})

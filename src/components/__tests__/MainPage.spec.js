import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainPage from '../MainPage.vue'

describe('MainPage', () => {
  it('renders properly', () => {
    const wrapper = mount(MainPage)
    expect(wrapper.text()).toContain('Generate Thank Yous')
  })
})

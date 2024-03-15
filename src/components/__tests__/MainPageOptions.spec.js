import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainPageOptions from '../MainPageOptions.vue'

describe('Options', () => {
    it('renders properly with the correct option headers', () => {
        const wrapper = mount(MainPageOptions)
        expect(wrapper.text()).toContain('Generate All Cards')
        expect(wrapper.text()).toContain('People Database')
        expect(wrapper.text()).toContain('Prompt Message')

    })
})
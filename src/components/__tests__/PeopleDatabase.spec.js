import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PeopleDatabase from '../PeopleDatabase.vue'

describe('PeopleDatabase', () => {
    it('renders properly', () => {
        const wrapper = mount(PeopleDatabase)
        expect(wrapper.text()).toContain('Add Person')
        expect(wrapper.text()).toContain('Import People')
    })
})
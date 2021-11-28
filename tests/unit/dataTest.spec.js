import { shallowMount } from '@vue/test-utils';
import App from '@/App';

const wrapper = shallowMount(App);

describe('Testing integrity of data properties', () => {

    test('should have name property', () => {
        expect(wrapper.vm.$data).toHaveProperty('name')

        expect(typeof wrapper.vm.$data.name).toBe('string')
    })

    test('should have image property', () => {
        expect(wrapper.vm.$data).toHaveProperty('image')
        expect(typeof wrapper.vm.$data.image).toBe('string')
    })

    test('should have type property', () => {
        expect(wrapper.vm.$data).toHaveProperty('type')
        expect(typeof wrapper.vm.$data.type).toBe('string')
    })

    test('should have weight', () => {
        expect(wrapper.vm.$data).toHaveProperty('weight')
        expect(typeof wrapper.vm.$data.weight).toBe('number')
    })

    test('to have height property', () => {
        expect(wrapper.vm.$data).toHaveProperty('height')
        expect(typeof wrapper.vm.$data.height).toBe('number')
    })

    test('should have abilities property', () => {
        expect(wrapper.vm.$data).toHaveProperty('abilities')
        expect(Array.isArray(wrapper.vm.$data.abilities)).toBeTruthy()
    })
})
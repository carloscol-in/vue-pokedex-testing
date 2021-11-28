import { mount } from '@vue/test-utils'
import App from '@/App'

describe('Testing the correct rendering of elements', () => {

    const wrapper = mount(App)

    test('should render 2 sections', () => {
        expect(wrapper.find('.app-pokemon-main').exists()).toBeTruthy()
        expect(wrapper.find('.app-pokemon-main').element.tagName.toLowerCase() === 'section').toBeTruthy()
        expect(wrapper.find('.app-pokemon-stats').exists()).toBeTruthy()
        expect(wrapper.find('.app-pokemon-stats').element.tagName.toLowerCase() === 'section').toBeTruthy()
    })

    test('should render 1 img', () => {
        expect(wrapper.find('.pokemon-name').exists()).toBeTruthy()
        expect(wrapper.find('.pokemon-name').element.tagName.toLowerCase() === 'p').toBeTruthy()
        expect(wrapper.find('#abilities').exists()).toBeTruthy()
        expect(wrapper.find('#abilities').exists()).toBeTruthy()
    })

    test('should render 1 button', () => {
        expect(wrapper.find('button').exists()).toBeTruthy()
    })

    test('should render 1 ul', () => {
        expect(wrapper.find('ul').exists()).toBeTruthy()
    })

    test('should render 1 component', () => {
        expect(wrapper.find('.component').exists()).toBeTruthy()
    })
})
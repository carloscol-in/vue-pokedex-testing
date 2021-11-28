import { mount } from '@vue/test-utils';
import { egg, spinach } from './jestTest';
import App from '@/App.vue';

const wrapper = mount(App);

describe('Quality of products will be tested', () => {

  // code for tests here

  test('Quality of egg', () => {
    // code
    expect(egg().condition[0]).toBe('fresh');
  })

  test('Quality of spinach', () => {
    // code
    expect(spinach()).toEqual({
      condition: 1,
      color: "green"
    })
  })

})

describe('changeTest property changes after clicking on button', () => {

  test('should click a button', () => {

    const last_value = wrapper.vm.changeTest;

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.changeTest).toBe(last_value + 1);

  })

})
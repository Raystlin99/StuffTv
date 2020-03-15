/* eslint-disable no-undef */
import React from 'react';
import App from './App';
import Counter from './Counter';
import Clicker from './Clicker';

describe('App', () => {
  test('should render coutner and clicker', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toExist();
    expect(wrapper.find(Counter)).toExist();
    expect(wrapper.find(Clicker)).toExist();
  });

  test('should update counter on click', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Counter).props().counter).toBe(0);

    const clicker = wrapper.find('Clicker');
    clicker.simulate('click');

    expect(wrapper.find(Counter).props().counter).toBe(1);
  });
});

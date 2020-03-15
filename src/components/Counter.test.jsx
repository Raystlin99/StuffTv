/* eslint-disable no-undef */
import React from 'react';
import Counter from './Counter';

describe('Counter', () => {
  test('should render count of zero', () => {
    const wrapper = shallow(<Counter />);
    const counterDiv = wrapper.find('div');
    expect(counterDiv.props().children).toEqual(['Count: ', 0]);
  });

  test('should render props counter', () => {
    const wrapper = shallow(<Counter counter={2} />);
    const counterDiv = wrapper.find('div');
    expect(counterDiv.props().children).toEqual(['Count: ', 2]);
  });
});

/* eslint-disable no-undef */
import React from 'react';
import App from './App';
import Shows from './show/Shows';

describe('App', () => {
  test('should render coutner and clicker', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toExist();
    expect(wrapper.find(Shows)).toExist();
  });
});

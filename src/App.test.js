/* eslint-disable no-undef */
import React from 'react';
import App from './App';
import Search from './search/Search';
import { Container } from 'semantic-ui-react';

describe('App', () => {
  test('should render Container and Search', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Container)).toExist();
    expect(wrapper.find(Search)).toExist();
  });
});

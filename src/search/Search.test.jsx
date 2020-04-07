/* eslint-disable no-undef */
import React from 'react';
import Search from './Search';
import SearchEntry from './SearchEntry';
import showApi from '../api/showApi';

describe('search > Search', () => {
  beforeEach(() => {
    showApi.search = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render heading with search box', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find(SearchEntry)).toExist();
  });

  test('should populate search box with initial search string', () => {
    const wrapper = shallow(<Search initialSearchString='some-value' />);
    expect(wrapper.find(SearchEntry).props().searchString).toBe('some-value');
  });

  test('should not call show api if no search string', () => {
    const wrapper = shallow(<Search />);
    const searchEntry = wrapper.find(SearchEntry);
    searchEntry.simulate('search');
    expect(showApi.search).not.toBeCalled();
  });

  test('should call show api search on search handler', () => {
    const wrapper = shallow(<Search initialSearchString='some-value' />);
    const icon = wrapper.find(SearchEntry);
    icon.simulate('search');
    expect(showApi.search).toBeCalled();
  });
});

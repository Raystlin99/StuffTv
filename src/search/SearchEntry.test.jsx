/* eslint-disable no-undef */
import React from 'react';
import SearchEntry from './SearchEntry';
import { Header, Input, Form } from 'semantic-ui-react'

describe('search > SearchEntry', () => {
  const defaultProps = {
    searchString: '',
    onSearchChange: jest.fn(),
    onSearch: jest.fn()
  };

  beforeEach(() => { });

  afterEach(() => jest.clearAllMocks());

  test('should render heading with search box', () => {
    const wrapper = shallow(<SearchEntry {...defaultProps} />);
    expect(wrapper.find(Header)).toExist();
    expect(wrapper.find(Input)).toExist();
  });

  test('should call searchChange on search change', () => {
    const wrapper = shallow(<SearchEntry {...defaultProps} />);
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: 'some-value' } });
    expect(defaultProps.onSearchChange).toBeCalledWith({ target: { value: 'some-value' } });
  });

  test('should call search on form submit', () => {
    const wrapper = shallow(<SearchEntry {...defaultProps} />);
    const form = wrapper.find(Form);
    form.simulate('submit');
    expect(defaultProps.onSearch).toBeCalled();
  });

  //TODO: Test click of search icon in input
});

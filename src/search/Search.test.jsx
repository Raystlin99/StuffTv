/* eslint-disable no-undef */
import React from 'react';
import Search from './Search';
import SearchEntry from './SearchEntry';

describe('search > Search', () => {
  const defaultProps = {};

  beforeEach(() => { });

  afterEach(() => jest.clearAllMocks());

  test('should render heading with search box', () => {
    const wrapper = shallow(<Search {...defaultProps} />);
    expect(wrapper.find(SearchEntry)).toExist();
  });
});

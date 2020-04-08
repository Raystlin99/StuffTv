/* eslint-disable no-undef */
import React from 'react';
import { Icon } from 'semantic-ui-react'
import SearchIcon from './SearchIcon';

describe('search > SearchIcon', () => {
  const defaultProps = {
    onClick: jest.fn(),
    value: 'some-value'
  };

  test('should render icon', () => {
    const wrapper = shallow(<SearchIcon {...defaultProps} />);
    expect(wrapper.find(Icon)).toExist();
  });

  test('should call click handler on click', () => {
    const wrapper = shallow(<SearchIcon {...defaultProps} />);
    const icon = wrapper.find(Icon);
    icon.simulate('click');
    expect(defaultProps.onClick).toBeCalledWith('some-value');
  });
});

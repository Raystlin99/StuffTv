/* eslint-disable no-undef */
import React from 'react';
import Clicker from './Clicker';

describe('Clicker', () => {
  const defaultProps = {
    onClick: jest.fn()
  };

  test('should render button', () => {
    const wrapper = shallow(<Clicker {...defaultProps} />);
    expect(wrapper.find('button')).toExist();
    expect(wrapper.find('button').props().children).toBe('Click');
  });

  test('should call click handler on button click', () => {
    const wrapper = shallow(<Clicker {...defaultProps} />);
    const clickerButton = wrapper.find('button');
    clickerButton.simulate('click');
    expect(defaultProps.onClick).toBeCalled();
  });
});

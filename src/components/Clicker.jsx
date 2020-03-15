import React from 'react';
import propTypes from 'prop-types';

const Clicker = ({ onClick }) => <button onClick={onClick}>Click</button>;

Clicker.propTypes = { onClick: propTypes.func.isRequired }

export default Clicker;

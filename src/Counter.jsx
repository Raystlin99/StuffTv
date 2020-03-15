import React from 'react';

const Counter = ({ counter }) => <div>Count: {counter}</div>;

Counter.defaultProps = { counter: 0 };

export default Counter;

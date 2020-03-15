import React, { useState } from 'react';
import Counter from './Counter';
import Clicker from './Clicker';
import hocWithLine from './hocWithLine';
import './App.css';

const App = () => {
  const [counter, setCount] = useState(0);

  const clickHandler = () => setCount(counter + 1);
  const HocWithLine = hocWithLine(Counter, counter);

  return <div className="App">
    <HocWithLine />
    {/* <HocWithLine InnerComponent={test}></HocWithLine> */}
    {/* <Counter counter={counter} />; */}
    <Clicker onClick={clickHandler} />
  </div>;
};

export default App;

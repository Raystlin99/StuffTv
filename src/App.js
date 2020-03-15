import React, { useState } from 'react';
import Counter from './components/Counter';
import Clicker from './components/Clicker';
import hocWithLine from './components/hocWithLine';
import './App.css';

const App = () => {
  const [counter, setCount] = useState(0);

  const clickHandler = () => setCount(counter + 1);
  const HocWithLine = hocWithLine(Counter, counter);

  return <div className="App">
    <HocWithLine />
    <Counter counter={counter} />
    <Clicker onClick={clickHandler} />
  </div>;
};

export default App;

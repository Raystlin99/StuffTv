import React from 'react';
import Search from './search/Search';
import { Container } from 'semantic-ui-react'

const App = () => {
  const searchHandler = (searchString) => {
    console.log('Do Search!', searchString);
  };

  return <Container><Search searchHandler={searchHandler} /></Container>;
}

export default App;

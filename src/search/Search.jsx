import React, { useState } from 'react';
import SearchEntry from './SearchEntry';

const Search = () => {
  const [searchString, setSearchString] = useState('');

  const searchChangeHandler = (event) => setSearchString(event.target.value);
  const searchHandler = () => console.log(searchString);

  return <SearchEntry onSearchChange={searchChangeHandler} onSearch={searchHandler} searchString={searchString} />;
};

export default Search;

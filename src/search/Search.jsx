import React, { useState } from 'react';
import PropType from 'prop-types';
import SearchEntry from './SearchEntry';
import ShowList from '../show/ShowList';
import showApi from '../api/showApi';

const Search = ({ initialSearchString }) => {
  const [searchString, setSearchString] = useState(initialSearchString ? initialSearchString : '');
  const [data, setShows] = useState(null);

  console.log('data: ', data);

  const searchChangeHandler = (event) => setSearchString(event.target.value);
  const searchHandler = async () => {
    if (!searchString)
      return;

    const result = await showApi.search(searchString);
    setShows(result);
  };

  return data
    ? <ShowList data={data} />
    : <SearchEntry onSearchChange={searchChangeHandler} onSearch={searchHandler} searchString={searchString} />;
};

Search.prototype = {
  initialSearchString: PropType.string
};

export default Search;

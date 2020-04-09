import React, { useState, useContext } from 'react';
import PropType from 'prop-types';
import SearchEntry from './SearchEntry';
import ShowList from '../showList/ShowList';
import showApi from '../api/showApi';
import { withRouter } from "react-router-dom"; // TODO: Don't like having to import this!, history prop should already work.
import ShowContext from '../common/ShowContext';

const Search = ({ initialSearchString, history }) => {
  // App Show Context
  const showContext = useContext(ShowContext);
  console.log('showContext: ', showContext);

  // State
  const [searchString, setSearchString] = useState(initialSearchString ? initialSearchString : '');
  const [data, setShows] = useState(null);

  console.log('data: ', data);

  const searchChangeHandler = (event) => setSearchString(event.target.value);
  const searchHandler = async () => {
    if (!searchString)
      return;

    const result = await showApi.search(searchString);
    setShows(result);
    history.push('/results');
  };

  return data
    ? <ShowList data={data} />
    : <SearchEntry onSearchChange={searchChangeHandler} onSearch={searchHandler} searchString={searchString} />;
};

Search.prototype = {
  initialSearchString: PropType.string
};

export default withRouter(Search);

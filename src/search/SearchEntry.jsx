import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { Header, Input, Form } from 'semantic-ui-react'
import SearchIcon from '../components/SearchIcon';

const SearchEntry = ({ searchString, onSearchChange, onSearch }) => {
  const inputRef = createRef()

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const style = { h1: { fontSize: '3em', marginTop: '40%' } };

  return <Form onSubmit={onSearch}>
    <Header size='huge' color='green' style={style.h1}>Search</Header>
    <Input fluid size='massive' icon={<SearchIcon onClick={onSearch} value={searchString} />} placeholder='Search...' value={searchString} onChange={value => onSearchChange(value)} ref={inputRef} />
  </Form>;
};

SearchEntry.propTypes = {
  searchString: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default SearchEntry;

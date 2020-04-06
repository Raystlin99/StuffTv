import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react'

const SearchIcon = ({ onClick, value }) => <Icon name='search' color='green' inverted circular link onClick={() => onClick(value)} />;

SearchIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default SearchIcon;

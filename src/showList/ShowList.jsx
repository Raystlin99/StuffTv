import React from 'react';
import PropType from 'prop-types';
import { Header } from 'semantic-ui-react'

const ShowList = ({ data }) =>
  <React.Fragment>
    {data ? data.map((item, index) => <Header key={index} textAlign='center'>{item.id} {item.name}</Header>) : <div>No Data!</div>}
  </React.Fragment>

ShowList.prototype = { data: PropType.object.isRequired };

export default ShowList;

import React, { useEffect, useState } from 'react';
import showApi from '../api/showApi';
import { Header, Button } from 'semantic-ui-react'

const ShowList = () => {
  const [data, setShows] = useState([]);

  useEffect(() => {
    const loadShows = async () => {
      const result = await showApi.search('agents');
      setShows(result);
    };

    loadShows();
  }, []);

  return <React.Fragment>
    {data ? data.map((item, index) => <Header key={index} textAlign='center'>{item.id} {item.name}</Header>) : null}
    <Button>Click Here</Button>
  </React.Fragment>
};


export default ShowList;

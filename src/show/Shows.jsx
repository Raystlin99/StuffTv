import React, { useEffect, useState } from 'react';
import showApi from '../api/showApi';

const Shows = () => {
  const [data, setShows] = useState([]);

  useEffect(() => {
    const loadShows = async () => {
      const result = await showApi.search('agents');
      setShows(result);
    };

    loadShows();
  }, []);

  return <div>
    {data ? data.map((item, index) => <div key={index}>{item.id} {item.name}</div>) : null}
  </div>
};


export default Shows;

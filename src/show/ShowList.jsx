import React from 'react';
import PropType from 'prop-types';
import { Header } from 'semantic-ui-react'

const ShowList = ({ data }) => {
  // const [data, setShows] = useState(data);

  // useEffect(() => {
  //   const loadShows = async () => {
  //     const result = await showApi.search('agents');
  //     setShows(result);
  //   };

  //   loadShows();
  // }, []);

  return <React.Fragment>
    {data ? data.map((item, index) => <Header key={index} textAlign='center'>{item.id} {item.name}</Header>) : null}
  </React.Fragment>
};

ShowList.prototype = {
  data: PropType.object.isRequired
};

export default ShowList;

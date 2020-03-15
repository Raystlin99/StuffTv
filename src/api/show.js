import axios from 'axios';

const search = async () => {
  const result = await axios.get('http://api.tvmaze.com/search/shows?q=agents-of-shield')
  const test = result.data.map(item => ({ id: item.show.id, name: item.show.name }))
  return test;
};

export default { search };

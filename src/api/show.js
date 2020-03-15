import axios from 'axios';
import { TvMaze } from '../constants';

const search = async (showName) => {
  try {
    const result = await axios.get(`${TvMaze.baseUrl}search/shows?q=${showName}`)

    if (result.status === 200)
      return formatShow(result.data)

    return [];
  } catch (error) {
    return [];
  }
};

const formatShow = (data) => {
  const test = data.map(item => ({ id: item.show.id, name: item.show.name }))
  return test;
}

export default { search };

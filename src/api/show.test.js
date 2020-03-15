import show from './show';
import axios from 'axios';
import { TvMaze } from '../constants';

describe('api > request', () => {
  beforeEach(() => { axios.get = jest.fn(); });
  afterEach(() => { jest.clearAllMocks(); });

  test('should return show list', async () => {
    axios.get.mockReturnValue({ status: 200, data: [{ show: { id: 1, name: 'some-name' } }] });

    const result = await show.search('some-name');

    expect(result.length).toBe(1);
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('some-name');
  });

  test('should return empty array if none found', async () => {
    axios.get.mockReturnValue({ status: 200, data: [] });

    const result = await show.search('some-unknown-name');

    expect(axios.get.mock.calls[0][0]).toBe(`${TvMaze.baseUrl}search/shows?q=some-unknown-name`);
    expect(result.length).toBe(0);
  });

  test('should return error message when api call fails', async () => {
    axios.get.mockReturnValue({ status: 500, data: [] });

    const result = await show.search('some-unknown-name');

    expect(axios.get.mock.calls[0][0]).toBe(`${TvMaze.baseUrl}search/shows?q=some-unknown-name`);
    expect(result.length).toBe(0);
  });

  test('should return error message when api throw exception', async () => {
    axios.get.mockReturnValue(new Error('some-error'));

    const result = await show.search('some-name');

    expect(axios.get.mock.calls[0][0]).toBe(`${TvMaze.baseUrl}search/shows?q=some-name`);
    expect(result.length).toBe(0);
  });
});

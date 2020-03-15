import show from './show';
import axios from 'axios';

describe('api > request', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockReturnValue({ data: [{ show: { id: 1, name: 'some-name' } }] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should do something', async () => {
    const result = await show.search();
    console.log('result: ', result);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('some-name');
  });
});

import { parseQueryString, stringfyQueryString } from '../urlQuery';

describe('urlQuery: ', () => {
  describe(`parseQueryString: `, () => {
    it(`parseQueryString("") should return {}`, () => {
      expect(JSON.stringify(parseQueryString(''))).toBe('{}');
    });

    it(`parseQueryString("http://www.baidu.com") should return {}`, () => {
      expect(JSON.stringify(parseQueryString('http://www.baidu.com'))).toBe(
        '{}'
      );
    });

    it(`parseQueryString('http://www.baidu.com?name=ryo&job=fe') should return an object that contains the name=ryo and job=fe `, () => {
      const query = parseQueryString('http://www.baidu.com?name=ryo&job=fe');
      expect(query).toHaveProperty('name', 'ryo');
      expect(query).toHaveProperty('job', 'fe');
    });
  });

  describe('stringfyQueryString', () => {
    it(`stringfyQueryString({name: 'ryo', job: 'fe'}) should return name=ryo&job=fe`, () => {
      expect(stringfyQueryString({ name: 'ryo', job: 'fe' })).toBe(
        'name=ryo&job=fe'
      );
    });
    it(`stringfyQueryString() should return 'name=ryo&job%5B0%5D=1&job%5B1%5D=2'`, () => {
      expect(stringfyQueryString({ name: 'ryo', job: [1, 2] })).toBe(
        'name=ryo&job%5B0%5D=1&job%5B1%5D=2'
      );
    });
  });
});

import { getBrowserInfo } from '../device';

describe('device: ', () => {
  it(`getBrowserInfo() should return {name: 'chrome',  version:'108.0.0.0'}`, () => {
    const testExpect = JSON.stringify({ name: 'chrome', version: '108.0.0.0' });
    expect(JSON.stringify(getBrowserInfo())).toBe(testExpect);
  });
});

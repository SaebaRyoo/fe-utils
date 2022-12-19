import { deepClone } from '../deepClone';

describe('deepClone: ', () => {
  it('deepClone() should return undefined', () => {
    expect(deepClone()).toEqual(undefined);
  });

  it('deepClone(undefined) should return undefined', () => {
    expect(deepClone(undefined)).toEqual(undefined);
  });

  it('deepClone(undefined) should return undefined', () => {
    expect(deepClone(undefined)).toEqual(undefined);
  });

  it(`deepClone('undefined') should return 'undefined'`, () => {
    expect(deepClone('undefined')).toEqual('undefined');
  });

  it(`deepClone({name: 'ryo', foo: 'bar', arr: [1,2, [3,4,{k: 5}]]}) should return {name: 'ryo', foo: 'bar', arr: [1,2, [3,4,{k: 5}]]}`, () => {
    const data = { name: 'ryo', foo: 'bar', arr: [1, 2, [3, 4, { k: 5 }]] };
    expect(JSON.stringify(deepClone(data))).toEqual(JSON.stringify(data));
  });
});

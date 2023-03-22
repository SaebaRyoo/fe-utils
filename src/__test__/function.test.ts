import { debounce, throttle, compareVersion } from '../function';

describe(`debounce: `, () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it(`return an new function and runs it after wait time`, () => {
    jest.spyOn(global, 'setTimeout');
    const callback = jest.fn();
    const debounced = debounce(callback, 1000);
    debounced();
    debounced();
    jest.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe(`throttle: `, () => {
  it(`it will be called 1 times`, () => {
    const cb = jest.fn();
    const throttled = throttle(cb, 1000);
    throttled();
    throttled();
    throttled();

    expect(cb).toHaveBeenCalledTimes(1);
  });
});

describe(`compare version: `, () => {
  it(`compareVersion("1.0", "1.0.0") should return 0`, () => {
    expect(compareVersion('1.0', '1.0.0')).toBe(0);
  });
  it(`compareVersion("1", "1.0.0") should return 0`, () => {
    expect(compareVersion('1.0', '1.0.0')).toBe(0);
  });
  it(`compareVersion("1", "1.0.0") should return 0`, () => {
    expect(compareVersion('01.0.0', '1.0.0')).toBe(0);
  });

  it(`compareVersion("0.0.1", "0.1.0") should return -1`, () => {
    expect(compareVersion('0.0.1', '0.1.0')).toBe(-1);
  });
  it(`compareVersion("0.0.01", "0.1.0") should return -1`, () => {
    expect(compareVersion('0.0.01', '0.1.0')).toBe(-1);
  });
  it(`compareVersion("2.6.09", "2.6.10") should return -1`, () => {
    expect(compareVersion('2.6.09', '2.6.10')).toBe(-1);
  });

  it(`compareVersion("3", "2.7.090") should return 1`, () => {
    expect(compareVersion('3', '2.7.090')).toBe(1);
  });
  it(`compareVersion("3.1", "2.7.090") should return 1`, () => {
    expect(compareVersion('3.1', '2.7.090')).toBe(1);
  });
  it(`compareVersion("03.1", "2.7.090") should return 1`, () => {
    expect(compareVersion('03.1', '2.7.090')).toBe(1);
  });
});

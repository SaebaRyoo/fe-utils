import { debounce, throttle } from '../function';

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

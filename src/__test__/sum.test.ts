import { sum } from '../index';

describe('sum', () => {
  it('should work', () => {
    expect(sum()).toEqual(0);
  });

  it('1 + 2 = 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

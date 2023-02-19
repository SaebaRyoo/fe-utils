import { arrayEqual, arrayUnique } from '..';

describe('arrayEqual', () => {
  it('[0,1,2] compared with [0,1] shoud return false', () => {
    expect(arrayEqual([0, 1, 2], [0, 1])).toBeFalsy();
  });

  it('[0,1,2] compared with [0,1,2] shoud return true', () => {
    expect(arrayEqual([0, 1, 2], [0, 1, 2])).toBeTruthy();
  });
});

describe('arrayUnique', () => {
  it(`[1, 1, 2, 'a', 'a', 'bcd'] should return [1,2,'a','bcd']`, () => {
    expect(
      arrayEqual(arrayUnique([1, 1, 2, 'a', 'a', 'bcd']), [1, 2, 'a', 'bcd'])
    ).toBeTruthy();
  });
});

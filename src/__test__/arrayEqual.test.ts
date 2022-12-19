import { arrayEqual } from '../arrayEqual';

describe('arrayEqual', () => {
  it('[0,1,2] compared with [0,1] shoud return false', () => {
    expect(arrayEqual([0, 1, 2], [0, 1])).toBeFalsy();
  });

  it('[0,1,2] compared with [0,1,2] shoud return true', () => {
    expect(arrayEqual([0, 1, 2], [0, 1, 2])).toBeTruthy();
  });
});

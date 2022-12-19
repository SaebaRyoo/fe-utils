import { formatMoney } from '../formatMoney';

describe('formatMoney: ', () => {
  it(`formatMoney(10000) should return '10,000.00'`, () => {
    expect(formatMoney(10000)).toBe('10,000.00');
  });

  it(`formatMoney(10000, 0) should return '10,000'`, () => {
    expect(formatMoney(10000, 0)).toBe('10,000');
  });

  it(`formatMoney(10000.123) should return '10,000.12'`, () => {
    expect(formatMoney(10000.123, 1)).toBe('10,000.12');
  });

  it(`formatMoney(10000.126) should return '10,000.12'`, () => {
    expect(formatMoney(10000.126, 1)).toBe('10,000.12');
  });

  it(`formatMoney(10000.126, 0) should return '10,000.12'`, () => {
    expect(formatMoney(10000.126, 0)).toBe('10,000.12');
  });
});

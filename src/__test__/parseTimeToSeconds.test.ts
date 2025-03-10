import parseTimeToSeconds from '../parseTimeToSeconds';

describe('parseTimeToSeconds', () => {
  it('should parse seconds correctly', () => {
    expect(parseTimeToSeconds('10s')).toBe(10);
    expect(parseTimeToSeconds('0s')).toBe(0);
    expect(parseTimeToSeconds('1s')).toBe(1);
  });

  it('should parse minutes correctly', () => {
    expect(parseTimeToSeconds('5m')).toBe(300);
    expect(parseTimeToSeconds('1m')).toBe(60);
    expect(parseTimeToSeconds('0m')).toBe(0);
  });

  it('should parse hours correctly', () => {
    expect(parseTimeToSeconds('2h')).toBe(7200);
    expect(parseTimeToSeconds('1h')).toBe(3600);
    expect(parseTimeToSeconds('0h')).toBe(0);
  });

  it('should parse days correctly', () => {
    expect(parseTimeToSeconds('1d')).toBe(86400);
    expect(parseTimeToSeconds('2d')).toBe(172800);
    expect(parseTimeToSeconds('0d')).toBe(0);
  });

  it('should throw error for invalid format', () => {
    expect(() => parseTimeToSeconds('abc')).toThrow('Invalid time format');
    expect(() => parseTimeToSeconds('10x')).toThrow('Invalid time format');
    expect(() => parseTimeToSeconds('10')).toThrow('Invalid time format');
    expect(() => parseTimeToSeconds('-5s')).toThrow('Invalid time format');
  });
});

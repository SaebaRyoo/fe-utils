export default function parseTimeToSeconds(time: string): number {
  const units: Record<string, number> = {
    s: 1,
    m: 60,
    h: 60 * 60,
    d: 24 * 60 * 60,
  };

  const unit = time.slice(-1);
  const value = parseInt(time.slice(0, -1), 10);

  // 修复：检查值是否为负数
  if (isNaN(value) || !units[unit] || value < 0) {
    throw new Error('Invalid time format');
  }

  return value * units[unit];
}

/**
 * 小数精度运算, 运算结果四舍五入
 * @param f 运算操作: 1+2 | 2 * 1.23456 | 1/3
 * @param digit 精确到{digit}位小数，如果运算结果为整数或小数位小于digit不补零
 * @returns number
 */
const formatFloat = (f: number, digit = 1): number => {
  // Math.pow(指数，幂指数)
  const m = Math.pow(10, digit);
  // Math.round（） 四舍五入
  return Math.round(f * m) / m;
};

export { formatFloat };

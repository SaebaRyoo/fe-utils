/**
 * 小数精度运算, 运算结果四舍五入, 不补零
 * @param f 运算操作: 1+2 | 2 * 1.23456 | 1/3
 * @param digit 精确到{digit}位小数
 * @returns number
 */
declare const formatFloat: (f: number, digit: number) => number;
export { formatFloat };

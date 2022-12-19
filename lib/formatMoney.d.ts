/**
 * 根据输入的金额按千位逗号分割
 * @param s 输入的金额
 * @param type 是否需要小数位
 * @returns 返回格式化后的金额字符串
 */
declare const formatMoney: (s: number, type?: number) => string;
export { formatMoney };

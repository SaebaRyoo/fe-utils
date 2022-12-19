/**
 * 根据输入的金额按千位逗号分割
 * @param s 输入的金额
 * @param type 是否需要小数位 0: 10000 -> '10,000', 1: 有小数 10000 -> '10,000.00'
 * @returns 返回格式化后的金额字符串
 */
const formatMoney = (s: number, type = 1): string => {
  s = Number.parseFloat(`${s}`);
  let isNegative = false;
  if (s < 0) {
    isNegative = true;
    s = -s;
  }
  let newString = s.toString().replace(/^(\d*)$/, '$1.');
  newString = `${newString}00`.replace(/(\d*\.\d\d)\d*/, '$1');
  newString = newString.replace('.', ',');
  const re = /(\d)(\d{3},)/;
  while (re.test(newString)) newString = newString.replace(re, '$1,$2');
  newString = newString.replace(/,(\d\d)$/, '.$1');
  if (type == 0) {
    const a = newString.split('.');
    if (a[1] == '00') {
      newString = a[0];
    }
  }
  if (isNegative) {
    return `-${newString}`;
  }
  return newString;
};

export { formatMoney };

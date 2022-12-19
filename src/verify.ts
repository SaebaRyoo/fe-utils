// 判断是否为16进制颜色，rgb或rgba
const isColor = (str: string): boolean =>
  /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0?\.\d+)\s*\)))$/.test(
    str
  );

// 根据输入判断是否为邮箱
const isEmail = (str: string): boolean =>
  /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);

// 是否为身份证
const isIdCard = (str: string): boolean =>
  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    str
  );

// 是否为手机号
const isPhoneNum = (str: string): boolean =>
  /^(\+?0?86-?)?1[3456789]\d{9}$/.test(str);

// 是否为url
const isUrl = (str: string) =>
  /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i.test(
    str
  );

// 是否为手机
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(
    navigator.userAgent
  );

// 是否为苹果设备
const isAppleDevice = () =>
  /(mac|iphone|ipod|ipad)/i.test(
    typeof navigator !== 'undefined' ? navigator.platform : ''
  );

const typeOf = (data: any) =>
  Object.prototype.toString
    .call(data)
    .replace(/\[\w+\s(\w+)\]/, '$1')
    .toLocaleLowerCase();

const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeOf(value) === 'object';
const isArray = (value: unknown): value is Array<any> =>
  value !== null && typeOf(value) === 'array';
// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = (value: unknown): value is Function =>
  typeOf(value) === 'function';

const isString = (value: unknown): value is string =>
  typeOf(value) === 'string';

const isBoolean = (value: unknown): value is boolean =>
  typeOf(value) === 'boolean';

const isNumber = (value: unknown): value is number =>
  typeOf(value) === 'number';

const isUndef = (value: unknown): value is undefined =>
  typeOf(value) === 'undefined';

const isDate = (value: unknown): value is undefined => typeOf(value) === 'date';

export {
  isColor,
  isEmail,
  isIdCard,
  isPhoneNum,
  isUrl,
  isMobile,
  isAppleDevice,
  isObject,
  isArray,
  isFunction,
  isString,
  isBoolean,
  isNumber,
  isUndef,
  isDate,
};

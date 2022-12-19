import {
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
} from '../verify';

describe('verify: ', () => {
  describe(`isColor: `, () => {
    it(`isColor('') should return false`, () => {
      expect(isColor('')).toBeFalsy();
    });

    it(`isColor('#cc') should return false`, () => {
      expect(isColor('#cc')).toBeFalsy();
    });

    it(`isColor('#ccc') should return true`, () => {
      expect(isColor('#ccc')).toBeTruthy();
    });

    it(`isColor('#ccccc') should return false`, () => {
      expect(isColor('#ccccc')).toBeFalsy();
    });

    it(`isColor('#cccccc') should return true`, () => {
      expect(isColor('#cccccc')).toBeTruthy();
    });

    it(`isColor('rgb(255,0)') should return true`, () => {
      expect(isColor('rgb(255,0)')).toBeFalsy();
    });

    it(`isColor('rgb(255,255,255)') should return true`, () => {
      expect(isColor('rgb(255,255,255)')).toBeTruthy();
    });

    it(`isColor('RGB(255,255,255)') should return true`, () => {
      expect(isColor('rgb(255,255,255)')).toBeTruthy();
    });

    it(`isColor('rgba(255,255,255, .5)') should return true`, () => {
      expect(isColor('rgba(255,255,255, .5)')).toBeTruthy();
    });

    it(`isColor('RGBa(255,255,255, 0.5)') should return true`, () => {
      expect(isColor('RGBa(255,255,255, 0.5)')).toBeTruthy();
    });
  });

  // 邮箱test
  describe('isEmail: ', () => {
    it(`isEmail('') should return false`, () => {
      expect(isEmail('')).toBeFalsy();
    });

    it(`isEmail('abc@qq.com') should return ture`, () => {
      expect(isEmail('abc@qq.com')).toBeTruthy();
    });

    it(`isEmail('abc@qq.') should return false`, () => {
      expect(isEmail('abc@qq.')).toBeFalsy();
    });
  });

  describe('isIdCard: ', () => {
    it(`isIdCard('34010220221219791X') should return true`, () => {
      expect(isIdCard('34010220221219791X')).toBeTruthy();
    });
  });

  describe('isPhoneNum: ', () => {
    it(`isPhoneNum('15188888354') should return true`, () => {
      expect(isPhoneNum('15188888354')).toBeTruthy();
    });
    it(`isPhoneNum('8615188888354') should return true`, () => {
      expect(isPhoneNum('8615188888354')).toBeTruthy();
    });
    it(`isPhoneNum('8867333') should return false`, () => {
      expect(isPhoneNum('8867333')).toBeFalsy();
    });
  });

  describe('isUrl: ', () => {
    it(`isUrl('https://www.baidu.com?foo=bar') should return true`, () => {
      expect(isUrl('https://www.baidu.com?foo=bar')).toBeTruthy();
    });
    it(`isUrl('http://www.baidu.com?foo=bar') should return true`, () => {
      expect(isUrl('http://www.baidu.com?foo=bar')).toBeTruthy();
    });
    it(`isUrl('www.baidu.com?foo=bar') should return true`, () => {
      expect(isUrl('www.baidu.com?foo=bar')).toBeTruthy();
    });
    it(`isUrl('baidu.com?foo=bar') should return true`, () => {
      expect(isUrl('baidu.com?foo=bar')).toBeTruthy();
    });
    it(`isUrl('baidu?foo=bar') should return false`, () => {
      expect(isUrl('baidu?foo=bar')).toBeFalsy();
    });
  });

  // see jest.config.js testEnvironmentOptions.userAgent
  it(`isMobile() should return false`, () => {
    expect(isMobile()).toBeFalsy();
  });

  it(`isAppleDevice() should return false`, () => {
    expect(isAppleDevice()).toBeFalsy();
  });

  describe('isObject: ', () => {
    it(`isObject(null) should return false`, () => {
      expect(isObject(null)).toBeFalsy();
    });
    it(`isObject(undefined) should return false`, () => {
      expect(isObject(undefined)).toBeFalsy();
    });
    it(`isObject('') should return false`, () => {
      expect(isObject('')).toBeFalsy();
    });
    it(`isObject(1) should return false`, () => {
      expect(isObject(1)).toBeFalsy();
    });
    it(`isObject(true) should return false`, () => {
      expect(isObject(true)).toBeFalsy();
    });
    it(`isObject([1,2,3]) should return false`, () => {
      expect(isObject([1, 2, 3])).toBeFalsy();
    });
    it(`isObject(Symbol(1)) should return false`, () => {
      expect(isObject(Symbol(1))).toBeFalsy();
    });
    it(`isObject(BigInt(9007199254740991)) should return false`, () => {
      expect(isObject(BigInt(9007199254740991))).toBeFalsy();
    });
    it(`isObject(function(){}) should return false`, () => {
      expect(isObject(function () {})).toBeFalsy();
    });
    it(`isObject({}) should return true`, () => {
      expect(isObject({})).toBeTruthy();
    });
  });

  describe('isArray: ', () => {
    it(`isArray(null) should return false`, () => {
      expect(isArray(null)).toBeFalsy();
    });
    it(`isArray(undefined) should return false`, () => {
      expect(isArray(undefined)).toBeFalsy();
    });
    it(`isArray('') should return false`, () => {
      expect(isArray('')).toBeFalsy();
    });
    it(`isArray(1) should return false`, () => {
      expect(isArray(1)).toBeFalsy();
    });
    it(`isArray(true) should return false`, () => {
      expect(isArray(true)).toBeFalsy();
    });
    it(`isArray([1,2,3]) should return true`, () => {
      expect(isArray([1, 2, 3])).toBeTruthy();
    });
    it(`isArray(Symbol(1)) should return false`, () => {
      expect(isArray(Symbol(1))).toBeFalsy();
    });
    it(`isArray(BigInt(9007199254740991)) should return false`, () => {
      expect(isArray(BigInt(9007199254740991))).toBeFalsy();
    });
    it(`isObject(function(){}) should return false`, () => {
      expect(isObject(function () {})).toBeFalsy();
    });
    it(`isArray({}) should return false`, () => {
      expect(isArray({})).toBeFalsy();
    });
  });

  describe('isString: ', () => {
    it(`isString(null) should return false`, () => {
      expect(isString(null)).toBeFalsy();
    });
    it(`isString(undefined) should return false`, () => {
      expect(isString(undefined)).toBeFalsy();
    });
    it(`isString('') should return true`, () => {
      expect(isString('')).toBeTruthy();
    });
    it(`isString(1) should return false`, () => {
      expect(isString(1)).toBeFalsy();
    });
    it(`isString(true) should return false`, () => {
      expect(isString(true)).toBeFalsy();
    });
    it(`isString([1,2,3]) should return false`, () => {
      expect(isString([1, 2, 3])).toBeFalsy();
    });
    it(`isString(Symbol(1)) should return false`, () => {
      expect(isString(Symbol(1))).toBeFalsy();
    });
    it(`isString(BigInt(9007199254740991)) should return false`, () => {
      expect(isString(BigInt(9007199254740991))).toBeFalsy();
    });
    it(`isString(function(){}) should return false`, () => {
      expect(isString(function () {})).toBeFalsy();
    });
    it(`isString({}) should return false`, () => {
      expect(isString({})).toBeFalsy();
    });
  });

  describe('isBoolean: ', () => {
    it(`isBoolean(null) should return false`, () => {
      expect(isBoolean(null)).toBeFalsy();
    });
    it(`isBoolean(undefined) should return false`, () => {
      expect(isBoolean(undefined)).toBeFalsy();
    });
    it(`isBoolean('') should return false`, () => {
      expect(isBoolean('')).toBeFalsy();
    });
    it(`isBoolean(1) should return false`, () => {
      expect(isBoolean(1)).toBeFalsy();
    });
    it(`isBoolean(false) should return true`, () => {
      expect(isBoolean(false)).toBeTruthy();
    });
    it(`isBoolean([1,2,3]) should return false`, () => {
      expect(isBoolean([1, 2, 3])).toBeFalsy();
    });
    it(`isBoolean(Symbol(1)) should return false`, () => {
      expect(isBoolean(Symbol(1))).toBeFalsy();
    });
    it(`isBoolean(BigInt(9007199254740991)) should return false`, () => {
      expect(isBoolean(BigInt(9007199254740991))).toBeFalsy();
    });
    it(`isBoolean(function(){}) should return false`, () => {
      expect(isBoolean(function () {})).toBeFalsy();
    });
    it(`isBoolean({}) should return false`, () => {
      expect(isBoolean({})).toBeFalsy();
    });
  });

  describe('isUndef: ', () => {
    it(`isUndef(null) should return false`, () => {
      expect(isUndef(null)).toBeFalsy();
    });
    it(`isUndef(undefined) should return true`, () => {
      expect(isUndef(undefined)).toBeTruthy();
    });
    it(`isUndef('') should return false`, () => {
      expect(isUndef('')).toBeFalsy();
    });
    it(`isUndef(1) should return false`, () => {
      expect(isUndef(1)).toBeFalsy();
    });
    it(`isUndef(false) should return false`, () => {
      expect(isUndef(false)).toBeFalsy();
    });
    it(`isUndef([1,2,3]) should return false`, () => {
      expect(isUndef([1, 2, 3])).toBeFalsy();
    });
    it(`isUndef(Symbol(1)) should return false`, () => {
      expect(isUndef(Symbol(1))).toBeFalsy();
    });
    it(`isUndef(BigInt(9007199254740991)) should return false`, () => {
      expect(isUndef(BigInt(9007199254740991))).toBeFalsy();
    });
    it(`isUndef(function(){}) should return false`, () => {
      expect(isUndef(function () {})).toBeFalsy();
    });
    it(`isUndef({}) should return false`, () => {
      expect(isUndef({})).toBeFalsy();
    });
  });

  describe('isNumber: ', () => {
    it(`isNumber(null) should return false`, () => {
      expect(isNumber(null)).toBeFalsy();
    });
    it(`isNumber(undefined) should return false`, () => {
      expect(isNumber(undefined)).toBeFalsy();
    });
    it(`isNumber('') should return false`, () => {
      expect(isNumber('')).toBeFalsy();
    });
    it(`isNumber(1) should return true`, () => {
      expect(isNumber(1)).toBeTruthy();
    });
    it(`isNumber(false) should return false`, () => {
      expect(isNumber(false)).toBeFalsy();
    });
    it(`isNumber([1,2,3]) should return false`, () => {
      expect(isNumber([1, 2, 3])).toBeFalsy();
    });
    it(`isNumber(Symbol(1)) should return false`, () => {
      expect(isNumber(Symbol(1))).toBeFalsy();
    });
    it(`isNumber(BigInt(9007199254740991)) should return false`, () => {
      expect(isNumber(BigInt(9007199254740991))).toBeFalsy();
    });
    it(`isNumber(function(){}) should return false`, () => {
      expect(isNumber(function () {})).toBeFalsy();
    });
    it(`isNumber({}) should return false`, () => {
      expect(isNumber({})).toBeFalsy();
    });
  });

  describe('isDate: ', () => {
    it(`isDate(null) should return false`, () => {
      expect(isDate(null)).toBeFalsy();
    });
    it(`isDate(undefined) should return false`, () => {
      expect(isDate(undefined)).toBeFalsy();
    });
    it(`isDate('') should return false`, () => {
      expect(isDate('')).toBeFalsy();
    });
    it(`isDate(1) should return false`, () => {
      expect(isDate(1)).toBeFalsy();
    });
    it(`isDate(false) should return false`, () => {
      expect(isDate(false)).toBeFalsy();
    });
    it(`isDate([1,2,3]) should return false`, () => {
      expect(isDate([1, 2, 3])).toBeFalsy();
    });
    it(`isDate(Symbol(1)) should return false`, () => {
      expect(isDate(Symbol(1))).toBeFalsy();
    });
    it(`isDate(BigInt(9007199254740991)) should return false`, () => {
      expect(isDate(BigInt(9007199254740991))).toBeFalsy();
    });
    it(`isDate(function(){}) should return false`, () => {
      expect(isDate(function () {})).toBeFalsy();
    });
    it(`isDate({}) should return false`, () => {
      expect(isDate({})).toBeFalsy();
    });

    it(`isDate(new Date()) should return false`, () => {
      expect(isDate(new Date())).toBeTruthy();
    });
  });
});

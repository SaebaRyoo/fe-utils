declare const isColor: (str: string) => boolean;
declare const isEmail: (str: string) => boolean;
declare const isIdCard: (str: string) => boolean;
declare const isPhoneNum: (str: string) => boolean;
declare const isUrl: (str: string) => boolean;
declare const isMobile: () => boolean;
declare const isAppleDevice: () => boolean;
declare const isObject: (value: unknown) => value is Record<any, any>;
declare const isArray: (value: unknown) => value is any[];
declare const isFunction: (value: unknown) => value is Function;
declare const isString: (value: unknown) => value is string;
declare const isBoolean: (value: unknown) => value is boolean;
declare const isNumber: (value: unknown) => value is number;
declare const isUndef: (value: unknown) => value is undefined;
export { isColor, isEmail, isIdCard, isPhoneNum, isUrl, isMobile, isAppleDevice, isObject, isArray, isFunction, isString, isBoolean, isNumber, isUndef, };
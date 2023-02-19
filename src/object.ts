import { isObject } from './verify';
const isEmpty = (obj: any) => {
  if (!isObject(obj)) {
    throw new TypeError('please input an object as a parameter');
  }
  return JSON.stringify(obj) === '{}' ? true : false;
};

export { isEmpty };

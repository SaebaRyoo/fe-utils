import { isArray, isObject } from './verify';

const deepClone = (data?: any) => {
  let copy: any[] | { [key: string]: any };
  if (isObject(data)) {
    copy = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (!isObject(data[key]) && !isArray(data[key])) {
          copy[key] = data[key];
        } else {
          copy[key] = deepClone(data[key]);
        }
      }
    }
  } else if (isArray(data)) {
    copy = [];
    for (let i = 0; i < data.length; i++) {
      if (!isObject(data[i]) && !isArray(data[i])) {
        copy.push(data[i]);
      } else {
        copy.push(deepClone(data[i]));
      }
    }
  } else {
    return data;
  }
  return copy;
};

export { deepClone };

import { isArray, isObject } from './verify';

type Query = {
  [key: string]: any;
};

// 将url中的query部分转为对象
const parseQueryString = (url: string): Query => {
  url = !!url ? url : window.location.href;
  if (url.indexOf('?') === -1) {
    return {};
  }
  const search: string = url.substring(url.indexOf('?') + 1);
  if (search === '') {
    return {};
  }
  const d: string[] = search.split('&');
  const query: Query = {};
  for (let i = 0; i < d.length; i++) {
    const pair = d[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
};

// 将对象序列化成url query字符串
const stringfyQueryString = (obj: Query): string => {
  if (!isObject(obj)) return '';
  const pairs: string[] = [];

  for (const key in obj) {
    const item = obj[key];

    if (isArray(item)) {
      for (let i = 0; i < item.length; ++i) {
        pairs.push(
          encodeURIComponent(key + '[' + i + ']') +
            '=' +
            encodeURIComponent(item[i])
        );
      }
      continue;
    }

    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(item));
  }

  return pairs.join('&');
};

export { parseQueryString, stringfyQueryString };

function debounce(fn: (...args: any[]) => void, wait: number) {
  let timer: any;
  return function debounced(this: any, ...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

function throttle(fn: (...args: any[]) => void, wait: number) {
  let last = 0;
  return function throttled(this: any, ...args: []) {
    const now = Date.now();
    // 超过约定时间，可以再次调用
    if (now - last >= wait) {
      fn.apply(this, args);
      last = Date.now();
    }
  };
}

/**
 * 如果 version1 > version2 返回 1，
 * 如果 version1 < version2 返回 -1，
 * 除此之外返回 0。
 * @param version1 字符串版本号
 * @param version2 字符串版本号
 */
function compareVersion(version1: string, version2: string) {
  const v1Arr = version1.split('.');
  const v2Arr = version2.split('.');

  const maxLen = Math.max(v1Arr.length, v2Arr.length);
  let idx = 0;
  while (idx < maxLen) {
    const v1Item = parseInt(v1Arr[idx]) || 0;
    const v2Item = parseInt(v2Arr[idx]) || 0;

    if (v1Item > v2Item) {
      return 1;
    }

    if (v1Item < v2Item) {
      return -1;
    }

    idx++;
  }
  return 0;
}

export { debounce, throttle, compareVersion };

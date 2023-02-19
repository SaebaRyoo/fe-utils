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

export { debounce, throttle };

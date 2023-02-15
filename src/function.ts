function debounce(fn: any, wait: number) {
  let timer: any;
  return function (...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

function throttle(fn: any, wait: number) {
  let last = 0;
  return function (...args: []) {
    const now = Date.now();
    // 超过约定时间，可以再次调用
    if (now - last >= wait) {
      fn.apply(this, args);
      last = Date.now();
    }
  };
}

export { debounce, throttle };

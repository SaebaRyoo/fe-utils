const setCookie = (name: string, value: string, days = 0): void => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = `${name}=${value};expires=${date}`;
};

const getCookie = (name: string): string => {
  const arr = document.cookie.replace(/\s/g, '').split(';');

  for (let i = 0; i < arr.length; i++) {
    const tmpArr = arr[i].split('=');
    if (tmpArr[0] === name) {
      return decodeURIComponent(tmpArr[1]);
    }
  }

  return '';
};

const removeCookie = (name: string): void => {
  // 设置已过期
  setCookie(name, '1', -1);
};

export { getCookie, setCookie, removeCookie };

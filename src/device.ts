type BrowserInfo = {
  name: string;
  version: string;
};

/**
 * @desc 获取浏览器类型和版本
 * @returns BrowserInfo
 */
const getBrowserInfo = () => {
  const browser: BrowserInfo = { name: '', version: '' };
  let re: RegExpMatchArray | null;
  const ua = navigator.userAgent.toLowerCase();

  if ((re = ua.match(/edge\/([\d.]+)/))) {
    browser.name = 'edge';
  } else if ((re = ua.match(/firefox\/([\d.]+)/))) {
    browser.name = 'firefox';
  } else if ((re = ua.match(/opera\/([\d.]+)/))) {
    browser.name = 'opera';
  } else if ((re = ua.match(/chrome\/([\d.]+)/))) {
    browser.name = 'chrome';
  } else if ((re = ua.match(/version\/([\d.]+).*safari/))) {
    browser.name = 'safari';
  }
  browser.version = re ? re[1] : '';

  return browser;
};

export { getBrowserInfo };

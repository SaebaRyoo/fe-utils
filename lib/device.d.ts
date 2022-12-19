type BrowserInfo = {
    name: string;
    version: string;
};
/**
 * @desc 获取浏览器类型和版本
 * @returns BrowserInfo
 */
declare const getBrowserInfo: () => BrowserInfo;
export { getBrowserInfo };

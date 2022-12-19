/**
 * 生成随机颜色
 * @returns string
 */
declare const randomColor: () => string;
/**
 * 生成[min, max]范围内的随机数
 * @param min number
 * @param max number
 * @returns number
 */
declare const randomNum: (min: number, max: number) => number;
/**
 * 生成随机号码
 * @returns string
 */
declare const randomPhone: () => string;
/**
 * 生成一个随机人名
 * @returns string
 */
declare const randomName: () => string;
export { randomColor, randomNum, randomPhone, randomName };

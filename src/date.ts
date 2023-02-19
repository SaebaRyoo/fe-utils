import { isString } from './verify';

// 是否为闰年
const isLeapYear = (year: number): boolean => {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) return true;
  return false;
};

// 倒计时
const remainTime = (endTime: string | Date): string => {
  const startDate = new Date(); //开始时间
  const endDate = new Date(endTime); //结束时间
  const t = endDate.getTime() - startDate.getTime(); //时间差
  let d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return `${d}天 ${h}小时 ${m}分钟 ${s}秒`;
};

// 判断是否是同一天
const isSameDay = (date1: Date | string, date2: Date | string) => {
  if (isString(date1)) date1 = new Date(date1);
  if (isString(date2)) date2 = new Date(date2);
  const date1Year = date1.getFullYear,
    date1Month = date1.getMonth() + 1,
    date1Date = date1.getDate(),
    date2Year = date2.getFullYear,
    date2Month = date2.getMonth() + 1,
    date2Date = date2.getDate();

  return (
    date1Date === date2Date &&
    date1Month === date2Month &&
    date1Year === date2Year
  );
};

/**
 * 判断传入日期是否为工作日
 * @param date 日期字符串、日期对象
 * @returns bool
 */
// const isWorkday = (date: string | Date) => {
//   date = new Date(date);
//   return date.getDay() < 5;
// };
export { isLeapYear, remainTime, isSameDay };

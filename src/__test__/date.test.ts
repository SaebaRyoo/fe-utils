import { isLeapYear, remainTime, isSameDay } from '../date';

describe('Date: ', () => {
  describe('isLeapYear()', () => {
    it('isLeapYear(2016) should return true', () => {
      expect(isLeapYear(2016)).toBeTruthy();
    });
    it('isLeapYear(2017) should return false', () => {
      expect(isLeapYear(2017)).toBeFalsy();
    });
    it('isLeapYear(2018) should return false', () => {
      expect(isLeapYear(2018)).toBeFalsy();
    });
    it('isLeapYear(2020) should return true', () => {
      expect(isLeapYear(2020)).toBeTruthy();
    });
    it('isLeapYear(2022) should return false', () => {
      expect(isLeapYear(2022)).toBeFalsy();
    });
    it('isLeapYear(2024) should return true', () => {
      expect(isLeapYear(2024)).toBeTruthy();
    });
  });

  describe('remainTime()', () => {
    it(`remainTime('2020-01-01') should equal to 0天0小时0分钟0秒`, () => {
      expect(remainTime('2020-01-01')).toEqual('0天 0小时 0分钟 0秒');
    });

    it('remainTime(new Date().getTime() + oneSecond + oneMinute + oneHour + oneDay) should equal to 1天1小时1分钟1秒', () => {
      let time = new Date().getTime(),
        oneSecond = 1000,
        oneMinute = oneSecond * 60,
        oneHour = oneMinute * 60,
        oneDay = oneHour * 24,
        o = new Date(time + oneSecond + oneMinute + oneHour + oneDay);
      expect(remainTime(o)).toEqual('1天 1小时 1分钟 1秒');
    });
  });

  describe('isSameDay: ', () => {
    it(`isSameDay(new Date('2020-01-01'), new Date()) should return false`, () => {
      expect(isSameDay(new Date('2020-01-01'), new Date())).toBeFalsy();
    });
    it(`isSameDay(new Date(), new Date()) should return true`, () => {
      expect(isSameDay(new Date(), new Date())).toBeTruthy();
    });
  });

  // describe('isWorkDay: ', () => {
  //   it(`isWorkDay(new Date('2022-02-19')) should return false`, () => {
  //     expect(isWorkday(new Date('2022-02-19'))).toBeFalsy()
  //   })
  //   it(`isWorkDay('2022-02-19') should return false`, () => {
  //     expect(isWorkday('2022-02-19')).toBeFalsy()
  //   })

  //   it(`isWorkDay(new Date('2022-02-20')) should return true`, () => {
  //     expect(isWorkday(new Date('2022-02-20'))).toBeTruthy()
  //   })
  //   it(`isWorkDay('2022-02-20') should return true`, () => {
  //     expect(isWorkday('2022-02-20')).toBeTruthy()
  //   })
  // })
});

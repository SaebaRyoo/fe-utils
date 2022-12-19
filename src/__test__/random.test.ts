import { randomColor, randomName, randomNum, randomPhone } from '../random';
import { isPhoneNum } from '../verify';

describe('random: ', () => {
  describe('randomColor: ', () => {
    it(`/^#[0-9a-fA-F]{6}$/.test(randomColor()) should return true`, () => {
      expect(/^#[0-9a-fA-F]{6}$/.test(randomColor())).toBeTruthy();
    });
  });

  describe('randomNum: ', () => {
    it(`1 <= randomNum(1,10) <= 10 should return ture`, () => {
      const received = randomNum(1, 10);
      expect(received).toBeGreaterThanOrEqual(1);
      expect(received).toBeLessThanOrEqual(10);
    });
  });

  describe('randomName: ', () => {
    const name = randomName();
    const lastName = `赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季`;
    it(`name.length === 2 || name.length === 3 should return true`, () => {
      expect(name.length === 2 || name.length === 3).toBeTruthy();
    });

    it(`lastName.match(name.substring(0,1)) !== null should return true`, () => {
      expect(lastName.match(name.substring(0, 1)) !== null).toBeTruthy();
    });
  });

  describe('randomPhone: ', () => {
    it(`isPhoneNum(randomPhone()) should return true`, () => {
      expect(isPhoneNum(randomPhone())).toBeTruthy();
    });
  });
});

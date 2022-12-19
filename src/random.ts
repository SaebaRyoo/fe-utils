/**
 * 生成随机颜色
 * @returns string
 */
const randomColor = (): string => {
  return (
    '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  );
};

/**
 * 生成[min, max]范围内的随机数
 * @param min number
 * @param max number
 * @returns number
 */
const randomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * 生成随机号码
 * @returns string
 */
const randomPhone = (() => {
  const prefix = [
    // 移动
    13400000000, 13500000000, 13600000000, 13700000000, 13800000000,
    13900000000, 14700000000, 15000000000, 15100000000, 15200000000,
    15700000000, 15800000000, 15900000000, 17200000000, 17800000000,
    18200000000, 18300000000, 18400000000, 18700000000, 18800000000,
    19500000000, 19700000000, 19800000000,
    // 联通
    13000000000, 13100000000, 13200000000, 14500000000, 15500000000,
    15600000000, 16600000000, 17500000000, 17600000000, 18500000000,
    18600000000, 19600000000,
    // 电信
    13300000000, 14900000000, 15300000000, 18000000000, 18900000000,
    17300000000, 17700000000, 19000000000, 19100000000, 19300000000,
    19900000000,
  ];
  return (): string => {
    const suffix = Math.ceil(Math.random() * 99999999);

    return prefix[Math.floor(Math.random() * prefix.length)] + suffix + '';
  };
})();

/**
 * 生成一个随机人名
 * @returns string
 */
const randomName: () => string = (() => {
  const lastName =
    '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季';

  const grilsFirstName =
    '秀娟英华慧巧美娜静淑惠珠翠雅芝玉萍红娥玲芬芳燕彩春菊兰凤洁梅琳素云莲真环雪荣爱妹霞香月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓纨仪荷丹蓉眉君琴蕊薇菁梦岚苑婕馨瑗琰韵融园艺咏卿聪澜纯毓悦昭冰爽琬茗羽希宁欣飘育滢馥筠柔竹霭凝晓欢霄枫芸菲寒伊亚宜可姬舒影荔枝思丽';
  const boysFirstName =
    '伟刚勇毅俊峰强军平保东文辉力明永健世广志义兴良海山仁波宁贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博诚先敬震振壮会思群豪心邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾楠榕风航弘';

  return (): string => {
    const index = Math.floor(Math.random() * lastName.length);
    let name = lastName[index];
    const j = randomNum(0, grilsFirstName.length - 1 - 2);

    const flag = [true, false][Math.floor(Math.random() * 2)];
    if (index % 2 === 0) {
      if (flag) {
        name = name + grilsFirstName.substring(j, j + 2);
      } else {
        name = name + grilsFirstName.substring(j, j + 1);
      }
    } else {
      if (flag) {
        name = name + boysFirstName.substring(j, j + 2);
      } else {
        name = name + boysFirstName.substring(j, j + 1);
      }
    }

    return name;
  };
})();

export { randomColor, randomNum, randomPhone, randomName };

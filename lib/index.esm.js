var arrayEqual = function (arr1, arr2) {
    if (arr1 === arr2)
        return true;
    if (arr1.length != arr2.length)
        return false;
    var i = 0;
    var len = arr1.length;
    while (i < len - 1) {
        if (arr1[i] !== arr2[i])
            return false;
        i++;
    }
    return true;
};

var setCookie = function (name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(date);
};
var getCookie = function (name) {
    var arr = document.cookie.replace(/\s/g, '').split(';');
    for (var i = 0; i < arr.length; i++) {
        var tmpArr = arr[i].split('=');
        if (tmpArr[0] === name) {
            return decodeURIComponent(tmpArr[1]);
        }
    }
    return '';
};
var removeCookie = function (name) {
    // 设置已过期
    setCookie(name, '1', -1);
};

/**
 * @desc 获取浏览器类型和版本
 * @returns BrowserInfo
 */
var getBrowserInfo = function () {
    var browser = { name: '', version: '' };
    var re;
    var ua = navigator.userAgent.toLowerCase();
    if ((re = ua.match(/edge\/([\d.]+)/))) {
        browser.name = 'edge';
    }
    else if ((re = ua.match(/firefox\/([\d.]+)/))) {
        browser.name = 'firefox';
    }
    else if ((re = ua.match(/opera\/([\d.]+)/))) {
        browser.name = 'opera';
    }
    else if ((re = ua.match(/chrome\/([\d.]+)/))) {
        browser.name = 'chrome';
    }
    else if ((re = ua.match(/version\/([\d.]+).*safari/))) {
        browser.name = 'safari';
    }
    browser.version = re ? re[1] : '';
    return browser;
};

/**
 * 小数精度运算, 运算结果四舍五入, 不补零
 * @param f 运算操作: 1+2 | 2 * 1.23456 | 1/3
 * @param digit 精确到{digit}位小数
 * @returns number
 */
var formatFloat = function (f, digit) {
    // Math.pow(指数，幂指数)
    var m = Math.pow(10, digit);
    // Math.round（） 四舍五入
    return Math.round(f * m) / m;
};

/**
 * 根据输入的金额按千位逗号分割
 * @param s 输入的金额
 * @param type 是否需要小数位
 * @returns 返回格式化后的金额字符串
 */
var formatMoney = function (s, type) {
    s = Number.parseFloat("".concat(s));
    var isNegative = false;
    if (s < 0) {
        isNegative = true;
        s = -s;
    }
    var newString = s.toString().replace(/^(\d*)$/, '$1.');
    newString = "".concat(newString, "00").replace(/(\d*\.\d\d)\d*/, '$1');
    newString = newString.replace('.', ',');
    var re = /(\d)(\d{3},)/;
    while (re.test(newString))
        newString = newString.replace(re, '$1,$2');
    newString = newString.replace(/,(\d\d)$/, '.$1');
    if (type == 0) {
        var a = newString.split('.');
        if (a[1] == '00') {
            newString = a[0];
        }
    }
    if (isNegative) {
        return "-".concat(newString);
    }
    return newString;
};

/**
 * 替换html模板字符串中的转义字符
 * @param str html模板字符串
 * @returns string
 */
var htmlTemplateDecode = function (str) {
    var s = '';
    if (str.length == 0)
        return '';
    s = str.replace(/&amp;/g, '&');
    s = s.replace(/&lt;/g, '<');
    s = s.replace(/&gt;/g, '>');
    s = s.replace(/&nbsp;/g, ' ');
    s = s.replace(/&#39;/g, "'");
    s = s.replace(/&quot;/g, '"');
    return s;
};

/**
 * 生成随机颜色
 * @returns string
 */
var randomColor = function () {
    return ('#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6));
};
/**
 * 生成[min, max]范围内的随机数
 * @param min number
 * @param max number
 * @returns number
 */
var randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
/**
 * 生成随机号码
 * @returns string
 */
var randomPhone = function () {
    var prefix = [
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
    var suffix = Math.ceil(Math.random() * 99999999);
    return prefix[Math.floor(Math.random() * prefix.length)] + suffix + '';
};
/**
 * 生成一个随机人名
 * @returns string
 */
var randomName = function () {
    var lastName = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季';
    var grilsFirstName = '秀娟英华慧巧美娜静淑惠珠翠雅芝玉萍红娥玲芬芳燕彩春菊兰凤洁梅琳素云莲真环雪荣爱妹霞香月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓纨仪荷丹蓉眉君琴蕊薇菁梦岚苑婕馨瑗琰韵融园艺咏卿聪澜纯毓悦昭冰爽琬茗羽希宁欣飘育滢馥筠柔竹霭凝晓欢霄枫芸菲寒伊亚宜可姬舒影荔枝思丽';
    var boysFirstName = '伟刚勇毅俊峰强军平保东文辉力明永健世广志义兴良海山仁波宁贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博诚先敬震振壮会思群豪心邦承乐绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏泽晨辰士以建家致树炎德行时泰盛雄琛钧冠策腾楠榕风航弘';
    var index = Math.floor(Math.random() * lastName.length);
    var name = lastName[index];
    var j = randomNum(0, grilsFirstName.length - 1 - 2);
    var flag = [true, false][Math.floor(Math.random() * 2)];
    if (index % 2 === 0) {
        if (flag) {
            name = name + grilsFirstName.substring(j, j + 2);
        }
        else {
            name = name + grilsFirstName.substring(j, j + 1);
        }
    }
    else {
        if (flag) {
            name = name + boysFirstName.substring(j, j + 2);
        }
        else {
            name = name + boysFirstName.substring(j, j + 1);
        }
    }
    return name;
};

// 判断是否为16进制颜色，rgb或rgba
var isColor = function (str) {
    return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(str);
};
// 根据输入判断是否为邮箱
var isEmail = function (str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
};
// 是否为身份证
var isIdCard = function (str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
};
// 是否为手机号
var isPhoneNum = function (str) {
    return /^(\+?0?86-?)?1[3456789]\d{9}$/.test(str);
};
// 是否为url
var isUrl = function (str) {
    return /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i.test(str);
};
// 是否为手机
var isMobile = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent);
};
// 是否为苹果设备
var isAppleDevice = function () {
    return /(mac|iphone|ipod|ipad)/i.test(typeof navigator !== 'undefined' ? navigator === null || navigator === void 0 ? void 0 : navigator.platform : '');
};
var typeOf = function (data) {
    return Object.prototype.toString
        .call(data)
        .replace(/\[\w+\s(\w+)\]/, '$1')
        .toLocaleLowerCase();
};
var isObject = function (value) {
    return value !== null && typeOf(value) === 'object';
};
var isArray = function (value) {
    return value !== null && typeOf(value) === 'array';
};
// eslint-disable-next-line @typescript-eslint/ban-types
var isFunction = function (value) {
    return typeOf(value) === 'function';
};
var isString = function (value) {
    return typeOf(value) === 'string';
};
var isBoolean = function (value) {
    return typeOf(value) === 'boolean';
};
var isNumber = function (value) {
    return typeOf(value) === 'number';
};
var isUndef = function (value) {
    return typeOf(value) === 'undefined';
};

// 是否为闰年
var isLeapYear = function (year) {
    if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0))
        return true;
    return false;
};
// 倒计时
var remainTime = function (endTime) {
    var startDate = new Date(); //开始时间
    var endDate = new Date(endTime); //结束时间
    var t = endDate.getTime() - startDate.getTime(); //时间差
    var d = 0, h = 0, m = 0, s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor((t / 1000 / 60 / 60) % 24);
        m = Math.floor((t / 1000 / 60) % 60);
        s = Math.floor((t / 1000) % 60);
    }
    return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒';
};
// 判断是否是同一天
var isSameDay = function (date1, date2) {
    if (isString(date1))
        date1 = new Date(date1);
    if (isString(date2))
        date2 = new Date(date2);
    var date1Year = date1.getFullYear, date1Month = date1.getMonth() + 1, date1Date = date1.getDate(), date2Year = date2.getFullYear, date2Month = date2.getMonth() + 1, date2Date = date2.getDate();
    return (date1Date === date2Date &&
        date1Month === date2Month &&
        date1Year === date2Year);
};

var deepClone = function (data) {
    var copy;
    if (isObject(data)) {
        copy = {};
        for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                if (!isObject(data[key]) && !isArray(data[key])) {
                    copy[key] = data[key];
                }
                else {
                    copy[key] = deepClone(data[key]);
                }
            }
        }
    }
    else if (isArray(data)) {
        copy = [];
        for (var i = 0; i < data.length; i++) {
            if (!isObject(data[i]) && !isArray(data[i])) {
                copy.push(data[i]);
            }
            else {
                copy.push(deepClone(data[i]));
            }
        }
    }
    else {
        return data;
    }
    return copy;
};

function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, total) { return total + prev; }, 0);
}

// 保留一位小数
var toFixed = function (num) { return Math.round(num * 100 * 10) / 10; };

// 将url中的query部分转为对象
var parseQueryString = function (url) {
    url = !!url ? url : window.location.href;
    if (url.indexOf('?') === -1) {
        return {};
    }
    var search = url.substring(url.indexOf('?') + 1);
    if (search === '') {
        return {};
    }
    var d = search.split('&');
    var query = {};
    for (var i = 0; i < d.length; i++) {
        var pair = d[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
};
// 将对象序列化成url query字符串
var stringfyQueryString = function (obj) {
    if (!isObject(obj))
        return '';
    var pairs = [];
    for (var key in obj) {
        var item = obj[key];
        if (isArray(item)) {
            for (var i = 0; i < item.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') +
                    '=' +
                    encodeURIComponent(item[i]));
            }
            continue;
        }
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(item));
    }
    return pairs.join('&');
};

export { arrayEqual, deepClone, formatFloat, formatMoney, getBrowserInfo, getCookie, htmlTemplateDecode, isAppleDevice, isBoolean, isColor, isEmail, isFunction, isIdCard, isLeapYear, isMobile, isNumber, isObject, isPhoneNum, isSameDay, isString, isUndef, isUrl, parseQueryString, randomColor, randomName, randomNum, randomPhone, remainTime, removeCookie, setCookie, stringfyQueryString, sum, toFixed };

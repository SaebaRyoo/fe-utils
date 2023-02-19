# FE-utils
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/SaebaRyoo/fe-utils/node.js.yml?branch=main) ![npm](https://img.shields.io/npm/v/@lxnxbnq/utils) [![Coverage Status](https://coveralls.io/repos/github/SaebaRyoo/fe-utils/badge.svg?branch=main)](https://coveralls.io/github/SaebaRyoo/fe-utils?branch=main) ![GitHub](https://img.shields.io/github/license/SaebaRyoo/fe-utils)


前端工具库,封装前端日常开发过程中的通用代码


## 如何使用

下载npm包（浏览器中使用请看下面）

`yarn add @lxnxbnq/utils` 或者 `npm install @lxnxbnq/utils`


### 使用ESModule规范导入
```js
import { sum } from '@lxnxbnq/utils';
console.log(sum(1,2,3,4)) // 输出10

```

### 使用CommonJS规范导入
```js
const { sum } = require('@lxnxbnq/utils')
console.log(sum(1,2,3,4))
```
### 在浏览器中使用
如果直接在浏览器中使用，则不需要包管理。直接下载[release](https://github.com/SaebaRyoo/fe-utils/releases)中的index.umd.js,使用的是umd通用模块规范

然后在浏览器中引用
```html
<script src="index.umd.js"></script>
<script>
    console.log(FE_utils.sum(1,2,3,4)) // 输出10
</script>
```

## 功能介绍

### Function
#### [debounce](https://github.com/SaebaRyoo/fe-utils/blob/main/src/function.ts#L1) 该方法传入函数，并返回一个只能在指定延时结束后才能调用的函数
#### [throttle](https://github.com/SaebaRyoo/fe-utils/blob/main/src/function.ts#L10) 该方法传入函数，并返回一个在规定时间内只能被调用一次的函数


### Array

#### [arrayEqual](https://github.com/SaebaRyoo/fe-utils/blob/main/src/array.ts#L1) 判断两个数组是否相等
#### [arrayUnique](https://github.com/SaebaRyoo/fe-utils/blob/main/src/array.ts#L21) 数组去重

### cookie

#### [setCookie](https://github.com/SaebaRyoo/fe-utils/blob/main/src/cookie.ts#L1) 设置一个cookie
#### [getCookie](https://github.com/SaebaRyoo/fe-utils/blob/main/src/cookie.ts#L7) 获取一个cookie
#### [removeCookie](https://github.com/SaebaRyoo/fe-utils/blob/main/src/cookie.ts#L20) 删除指定名称cookie


### 日期操作

#### [isLeapYear](https://github.com/SaebaRyoo/fe-utils/blob/main/src/date.ts#L4) 判断是否闰年
#### [remainTime](https://github.com/SaebaRyoo/fe-utils/blob/main/src/date.ts#L10) 获取一个倒计时
#### [isSameDay](https://github.com/SaebaRyoo/fe-utils/blob/main/src/date.ts#L28) 判断是否同一天
#### [isWorkDay](https://github.com/SaebaRyoo/fe-utils/blob/main/src/date.ts#50) 是否为工作日

### [deepClone](https://github.com/SaebaRyoo/fe-utils/blob/main/src/deepClone.ts) 支持各种数据类型的深拷贝


### [getBrowserInfo](https://github.com/SaebaRyoo/fe-utils/blob/main/src/device.ts) 获取浏览名称和版本

### [formatFloat](https://github.com/SaebaRyoo/fe-utils/blob/main/src/formatFloat.ts) 小数精度运算

### [formatMoney](https://github.com/SaebaRyoo/fe-utils/blob/main/src/formatMoney.ts) 按千位逗号分割金额

### 图片相关操作
#### [convertImgStreamToBase64](https://github.com/SaebaRyoo/fe-utils/blob/main/src/img.ts#L2) 图片流转base64

#### [downloadImgStream](https://github.com/SaebaRyoo/fe-utils/blob/main/src/img.ts#L12) 下载图片流

### 对象操作
#### [isEmpty](https://github.com/SaebaRyoo/fe-utils/blob/main/src/object.ts#L1) 判断是否为空对象
### 随机数据生成

#### [randomColor](https://github.com/SaebaRyoo/fe-utils/blob/main/src/random.ts#L5) 生成随机颜色
#### [randomNum](https://github.com/SaebaRyoo/fe-utils/blob/main/src/random.ts#L17) 生成[min, max]范围内的随机数

#### [randomPhone](https://github.com/SaebaRyoo/fe-utils/blob/main/src/random.ts#L25) 生成随机号码
#### [randomName](https://github.com/SaebaRyoo/fe-utils/blob/main/src/random.ts#L53) 生成随机人名


### url操作

#### [parseQueryString](https://github.com/SaebaRyoo/fe-utils/blob/main/src/urlQuery.ts#L8)  将url中的query部分转为对象


#### [stringfyQueryString](https://github.com/SaebaRyoo/fe-utils/blob/main/src/urlQuery.ts#L27) 将对象序列化为url query字符串


### 验证函数

#### [isColor](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L2) 判断是否为16进制颜色，rgb或rgba
#### [isEmail](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L8) 验证邮箱格式是否正确

#### [isIdCard](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L12) 验证身份证号是否正确

#### [isPhoneNum](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L18) 验证手机号是否正确

#### [isUrl](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L22) 验证url是否正确

#### [isMobile](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L28) 验证当前宿主环境是否为手机

#### [isAppleDevice](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L34) 验证是否为苹果设备


#### [typeOf](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L39) 获取传入数据的类型

#### [isObject](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L45) 验证数据类型是否为object

#### [isFunction](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L50) 验证数据类型是否为function

#### [isString](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L53) 验证数据类型是否为string

#### [isBoolean](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L56) 验证数据类型是否为boolean

#### [isNumber](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L59) 验证数据类型是否为number

#### [isUndef](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L62) 验证数据类型是否为undefined

#### [isDate](https://github.com/SaebaRyoo/fe-utils/blob/main/src/verify.ts#L65) 验证数据类型是否为一个date对象

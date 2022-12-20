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

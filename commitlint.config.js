// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 增加新功能
        'fix', // 修复bug
        'docs', // 只改动了文档相关的内容
        'style', // 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        'refactor', // 代码重构时使用
        'test', // 添加测试或者修改现有测试
        'build', // 构造工具的或者外部依赖的改动，例如webpack，npm
        'chore', // 不修改src或者test的其他修改，例如构建过程或辅助工具的变更
        'revert', // 执行git revert打印的message
        'pref', // 提升性能的改动
        'merge', // 代码合并
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};

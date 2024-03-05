module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    // 1. react 插件规则个性化设置: https://www.npmjs.com/package/eslint-plugin-react
    'react/default-props-match-prop-types': 2, // 对于必须 props 无需设置默认值
    'react/prop-types': 0,                     // 不强制要求设置 props 校验
    'react/display-name': 0,                   // 不强制设置 displayName(为组件命名)
    'react/self-closing-comp': 2,              // 不允许额外的结束标签, 如果没有子元素应该使用自闭合标签
  }
  // .... 
}
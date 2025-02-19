/*
 * @Author: 赵恩来
 * @Date: 2025-02-19 10:19:18
 * @LastEditors: 赵恩来
 * @LastEditTime: 2025-02-19 10:19:21
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    // TypeScript 规则
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any 类型
    '@typescript-eslint/ban-ts-comment': 'off', // 允许使用 @ts-ignore
    '@typescript-eslint/no-unused-vars': 'warn', // 未使用变量警告

    // Vue 规则
    'vue/multi-word-component-names': 'off', // 允许单文件组件使用单个单词名称
    'vue/require-default-prop': 'off', // 不要求必须设置默认 prop 值

    // 通用规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': ['warn', 'single', { avoidEscape: true }], // 使用单引号
    'semi': ['warn', 'never'], // 不使用分号
    'indent': ['warn', 2], // 2空格缩进
    'vue/html-indent': ['warn', 2], // Vue 模板 2空格缩进
    'vue/script-indent': ['warn', 2, { baseIndent: 1 }] // Vue script 缩进
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off' // 关闭 Vue 文件的通用缩进检查
      }
    }
  ]
}
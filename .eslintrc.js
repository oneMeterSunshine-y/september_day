module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    'space-unary-ops': 'off',             //关闭多余的空格检验
    'no-trailing-spaces': 'off',          //关闭无用的空格检测
    'semi': 'off',                        //关闭分号检测
    'space-before-function-paren': 'off',   //关闭function前的空格
    'no-multiple-empty-lines': 'off',
    'no-tabs': 'off',
    'prefer-const ':0,
    "no-var": 0,
    "vue/no-v-html": "off",
    "vue/no-use-v-if-with-v-for": "off",
    "vue/valid-v-model": "off",
  },
}

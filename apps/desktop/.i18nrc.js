const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: 'resources/locales/zh-CN',
  entryLocale: 'zh-CN',
  output: 'resources/locales',
  outputLocales: [
    'zh-TW',
    'en-US',
  ],
  saveImmediately: true,
  temperature: 0,
  modelName: 'gpt-4.1-mini',
  experimental: {
    jsonMode: true,
  },
});

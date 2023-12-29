/** @type {import('next-i18next').UserConfig} */
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localePath: path.resolve('./public/locales'),
    // reloadOnPrerender: false,
  },
 }
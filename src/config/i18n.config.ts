import i18n from 'i18n';
import path from 'path';

 i18n.configure({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: path.join('./src', 'locales')
});

export default i18n;

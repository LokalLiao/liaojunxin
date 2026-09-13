import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ja from './locales/ja.json'

const savedLanguage = localStorage.getItem('language') || 'ja'

const i18n = createI18n({
  legacy: false, // 必须为 false（支持 Composition API）
  globalInjection: true, // 允许全局注入
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages: {
    en: en,
    ja: ja
  }
})

export default i18n
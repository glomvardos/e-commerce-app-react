import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEn from './translations/en.json'
import translationEl from './translations/el.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: translationEn
      },
      el: {
        translation: translationEl
      }
    }
  })

export default i18n

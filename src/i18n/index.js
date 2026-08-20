import { createI18n } from 'vue-i18n'
import fr from './locales/fr.js'
import wo from './locales/wo.js'

const STORAGE_KEY = 'dahira-lang'
const savedLocale = localStorage.getItem(STORAGE_KEY)

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale === 'wo' ? 'wo' : 'fr',
  fallbackLocale: 'fr',
  messages: { fr, wo },
})

export function toggleLocale() {
  const next = i18n.global.locale.value === 'fr' ? 'wo' : 'fr'
  i18n.global.locale.value = next
  localStorage.setItem(STORAGE_KEY, next)
  document.documentElement.lang = next
  return next
}

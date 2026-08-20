import { createApp, watchEffect } from 'vue'
import './style.css'
import App from './App.vue'
import { i18n } from './i18n'
import { revealDirective } from './composables/revealDirective'
import { magneticDirective } from './composables/magneticDirective'
import { tiltDirective } from './composables/tiltDirective'
import { initLenis } from './composables/useLenis'

const app = createApp(App)
app.use(i18n)
app.directive('reveal', revealDirective)
app.directive('magnetic', magneticDirective)
app.directive('tilt', tiltDirective)
app.mount('#app')

initLenis()

// Titre / lang / meta description synchronisés avec la langue active
watchEffect(() => {
  const t = i18n.global.t
  document.title = t('meta.title')
  document.documentElement.lang = i18n.global.locale.value === 'wo' ? 'wo' : 'fr'
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', t('meta.description'))
})

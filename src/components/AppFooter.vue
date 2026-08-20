<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="#accueil" class="brand">
          <span class="brand-mark" aria-hidden="true"><AppIcon name="moon" :size="24" /></span>
          <span class="brand-text"><strong>{{ t('common.brandTop') }}</strong> {{ t('common.brandBottom') }}</span>
        </a>
        <p>{{ t('footer.tagline') }}</p>
        <div class="social-row">
          <a href="#" aria-label="WhatsApp"><AppIcon name="whatsapp" :size="18" /></a>
          <a href="#" aria-label="Facebook"><AppIcon name="facebook" :size="18" /></a>
          <a href="#" aria-label="Instagram"><AppIcon name="instagram" :size="18" /></a>
          <a href="#" aria-label="YouTube"><AppIcon name="youtube" :size="18" /></a>
        </div>
      </div>
      <div class="footer-links">
        <h4>{{ t('footer.navTitle') }}</h4>
        <ul>
          <li><a href="#apropos">{{ t('nav.apropos') }}</a></li>
          <li><a href="#evenements">{{ t('nav.evenements') }}</a></li>
          <li><a href="#bibliotheque">{{ t('nav.bibliotheque') }}</a></li>
          <li><a href="#dons">{{ t('donate.title') }}</a></li>
          <li><a href="#rejoindre">{{ t('join.tag') }}</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>{{ t('footer.coordsTitle') }}</h4>
        <ul>
          <li>{{ t('contact.info.address') }}</li>
          <li>{{ t('contact.info.phone') }}</li>
          <li>{{ t('contact.info.email') }}</li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>{{ t('footer.legalTitle') }}</h4>
        <ul>
          <li v-for="(link, i) in legalLinks" :key="i"><a href="#">{{ link }}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-quote">
      <p>{{ t('footer.quote') }} <em>{{ t('footer.quoteDisclaimer') }}</em></p>
    </div>
    <div class="footer-bottom">
      <p>© {{ year }} {{ t('common.brandTop') }} {{ t('common.brandBottom') }}. {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'

const { t, tm } = useI18n()
const legalLinks = computed(() => tm('footer.legalLinks'))
const year = new Date().getFullYear()
</script>

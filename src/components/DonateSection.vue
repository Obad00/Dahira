<template>
  <section class="section donate-section" id="dons">
    <div class="container">
      <div class="section-head light" v-reveal>
        <span class="tag tag-light">{{ t('donate.tag') }}</span>
        <h2>{{ t('donate.title') }}</h2>
        <p class="lead">{{ t('donate.lead') }}</p>
      </div>

      <div class="donate-grid">
        <a href="#" class="donate-card" v-reveal>
          <AppIcon name="wave" :size="34" />
          <h3>{{ t('donate.wave') }}</h3>
          <p>+221 77 000 00 00</p>
        </a>
        <a href="#" class="donate-card" v-reveal>
          <AppIcon name="om" :size="34" />
          <h3>{{ t('donate.om') }}</h3>
          <p>+221 78 000 00 00</p>
        </a>
        <a href="#" class="donate-card" v-reveal>
          <AppIcon name="paypal" :size="34" />
          <h3>{{ t('donate.paypal') }}</h3>
          <p>paypal.me/dahira-nooru-touba</p>
        </a>
        <div class="donate-card" v-reveal>
          <AppIcon name="book" :size="34" />
          <h3>{{ t('donate.bank') }}</h3>
          <p><a href="#contact">{{ t('donate.bankNote') }}</a></p>
        </div>
      </div>

      <p class="donate-transparency" v-reveal>{{ t('donate.transparency') }}</p>
      <p class="event-disclaimer light">{{ t('donate.disclaimer') }}</p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'
const { t } = useI18n()
</script>

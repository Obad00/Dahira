<template>
  <section class="section donate-section blob-host" id="dons">
    <OrganicBlob />
    <div class="container">
      <div class="section-head light" v-reveal>
        <span class="tag tag-light">{{ t('donate.tag') }}</span>
        <h2>{{ t('donate.title') }}</h2>
        <p class="lead">{{ t('donate.lead') }}</p>
      </div>

      <div class="donate-grid">
        <a href="#" class="donate-card" v-reveal v-tilt>
          <AppIcon name="wave" :size="34" />
          <h3>{{ t('donate.wave') }}</h3>
          <p>+221 77 000 00 00</p>
        </a>
        <a href="#" class="donate-card" v-reveal v-tilt>
          <AppIcon name="om" :size="34" />
          <h3>{{ t('donate.om') }}</h3>
          <p>+221 78 000 00 00</p>
        </a>
        <a href="#" class="donate-card" v-reveal v-tilt>
          <AppIcon name="paypal" :size="34" />
          <h3>{{ t('donate.paypal') }}</h3>
          <p>paypal.me/dahira-nooru-touba</p>
        </a>
        <div class="donate-card" v-reveal v-tilt>
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
import OrganicBlob from './OrganicBlob.vue'
const { t } = useI18n()
</script>

<style scoped>
.blob-host{position:relative;}
.blob-host > .container{position:relative;z-index:1;}
</style>

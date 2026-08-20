<template>
  <section class="section" id="social">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="tag">{{ t('social.tag') }}</span>
        <h2>{{ t('social.title') }}</h2>
        <p class="lead">{{ t('social.lead') }}</p>
      </div>
      <div class="social-grid">
        <div class="social-card" v-for="(card, i) in cards" :key="i" v-reveal>
          <AppIcon :name="icons[i]" :size="30" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
        </div>
      </div>
      <div class="waqf-banner" v-reveal>
        <p>
          {{ t('social.banner') }}
          <a href="#dons">{{ t('donate.title') }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'

const { t, tm } = useI18n()
const icons = ['heart', 'users', 'book', 'calendar']
const cards = computed(() => tm('social.cards'))
</script>

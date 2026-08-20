<template>
  <section class="section section-alt" id="bibliotheque">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="tag">{{ t('library.tag') }}</span>
        <h2>{{ t('library.title') }}</h2>
        <p class="lead">{{ t('library.lead') }}</p>
      </div>
      <div class="library-grid">
        <article class="library-card" v-for="(card, i) in cards" :key="i" v-reveal>
          <div class="library-icon"><AppIcon :name="icons[i]" :size="26" /></div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
          <a href="#" class="lib-link">{{ card.link }} <AppIcon :name="linkIcons[i]" :size="16" /></a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'

const { t, tm } = useI18n()
const icons = ['book', 'headphones', 'play', 'book']
const linkIcons = ['download', 'arrow', 'arrow', 'download']
const cards = computed(() => tm('library.cards'))
</script>

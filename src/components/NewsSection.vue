<template>
  <section class="section section-alt" id="actualites">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="tag">{{ t('news.tag') }}</span>
        <h2>{{ t('news.title') }}</h2>
        <p class="lead">{{ t('news.lead') }}</p>
      </div>
      <div class="news-grid">
        <article class="news-card" v-for="(article, i) in articles" :key="i" v-reveal>
          <div class="news-thumb"></div>
          <div class="news-body">
            <span class="news-date">{{ article.date }}</span>
            <h3>{{ article.title }}</h3>
            <p>{{ article.excerpt }}</p>
            <a href="#" class="lib-link">{{ t('news.readmore') }} <AppIcon name="arrow" :size="16" /></a>
          </div>
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
const articles = computed(() => tm('news.articles'))
</script>

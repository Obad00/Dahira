<template>
  <section class="section section-alt" id="khalife">
    <div class="container">
      <div class="khalife-card" v-reveal>
        <div class="khalife-photo" role="img" aria-label="Portrait du guide spirituel du dahira">
          <span class="khalife-photo-ring"></span>
        </div>
        <div class="khalife-content">
          <span class="tag">{{ t('khalife.tag') }}</span>
          <h2>{{ t('khalife.title') }}</h2>
          <blockquote class="inline-quote">
            <p>{{ t('khalife.quote') }}</p>
          </blockquote>
          <p class="khalife-name">{{ t('khalife.name') }}</p>
          <p class="khalife-note">{{ t('khalife.note') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

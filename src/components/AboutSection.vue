<template>
  <section class="section" id="apropos">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="tag">{{ t('about.tag') }}</span>
        <h2>{{ t('about.title') }}</h2>
        <p class="lead">{{ t('about.lead') }}</p>
      </div>

      <div class="grid-2 va-center">
        <div v-reveal>
          <h3>{{ t('about.missionTitle') }}</h3>
          <p>{{ t('about.missionP1') }}</p>
          <p>{{ t('about.missionP2') }}</p>
        </div>
        <div class="values-grid" v-reveal>
          <div class="value-card" v-for="(value, i) in values" :key="i">
            <AppIcon :name="icons[i]" :size="28" />
            <h4>{{ value.title }}</h4>
            <p>{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'

const { t, tm } = useI18n()
const icons = ['book', 'users', 'heart', 'moon']
const values = computed(() => tm('about.values'))
</script>

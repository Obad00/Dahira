<template>
  <div v-if="locale === 'wo'" class="wolof-notice">
    <p>⚠️ {{ t('wolofNotice') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<style scoped>
.wolof-notice {
  background: linear-gradient(90deg, var(--gold-soft), var(--gold));
  color: var(--blue-900);
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 8px 20px;
}
.wolof-notice p {
  margin: 0;
  color: var(--blue-900);
  max-width: var(--container);
  margin: 0 auto;
}
</style>

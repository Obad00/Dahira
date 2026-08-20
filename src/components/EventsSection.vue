<template>
  <section class="section" id="evenements">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="tag">{{ t('events.tag') }}</span>
        <h2>{{ t('events.title') }}</h2>
        <p class="lead">{{ t('events.lead') }}</p>
      </div>

      <!-- Compte à rebours -->
      <div class="countdown-card" v-reveal>
        <div class="countdown-info">
          <AppIcon name="calendar" :size="24" />
          <div>
            <h3>{{ t('events.countdown.title') }}</h3>
            <p>{{ t('events.countdown.desc') }}</p>
          </div>
        </div>
        <div class="countdown">
          <div class="cd-unit"><span>{{ days }}</span><small>{{ t('events.countdown.days') }}</small></div>
          <div class="cd-unit"><span>{{ hours }}</span><small>{{ t('events.countdown.hours') }}</small></div>
          <div class="cd-unit"><span>{{ mins }}</span><small>{{ t('events.countdown.mins') }}</small></div>
          <div class="cd-unit"><span>{{ secs }}</span><small>{{ t('events.countdown.secs') }}</small></div>
        </div>
      </div>
      <p class="event-disclaimer">{{ t('events.countdown.disclaimer') }}</p>

      <!-- Cartes événements -->
      <div class="events-grid">
        <article class="event-card" v-for="(card, i) in cards" :key="i" v-reveal>
          <div class="event-date"><span>{{ card.day }}</span><small>{{ card.month }}</small></div>
          <div class="event-body">
            <h3>{{ card.title }}</h3>
            <p><AppIcon name="pin" :size="16" /> {{ card.location }}</p>
            <p class="event-desc">{{ card.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCountdown } from '../composables/useCountdown'
import AppIcon from './AppIcon.vue'

const { t, tm } = useI18n()
const cards = computed(() => tm('events.cards'))

// Grand Magal de Touba — nuit du 22 juillet 2027 (à confirmer chaque année,
// le calendrier religieux mouride suivant le calendrier hégirien).
const { days, hours, mins, secs } = useCountdown('2027-07-22T20:00:00')
</script>

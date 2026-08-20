<template>
  <section class="section" id="contact">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="tag">{{ t('contact.tag') }}</span>
        <h2>{{ t('contact.title') }}</h2>
        <p class="lead">{{ t('contact.lead') }}</p>
      </div>
      <div class="contact-grid">
        <form class="card-form" v-reveal novalidate @submit.prevent="onSubmit">
          <div class="form-row">
            <label for="c-name">{{ t('contact.form.name') }}</label>
            <input type="text" id="c-name" v-model="form.name" required>
          </div>
          <div class="form-row">
            <label for="c-email">{{ t('contact.form.email') }}</label>
            <input type="email" id="c-email" v-model="form.email" required>
          </div>
          <div class="form-row">
            <label for="c-msg">{{ t('contact.form.message') }}</label>
            <textarea id="c-msg" v-model="form.message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">{{ t('contact.form.submit') }}</button>
          <p class="form-success" role="status" v-if="submitted">{{ t('contact.form.success') }}</p>
        </form>

        <div class="contact-side" v-reveal>
          <div class="contact-info-card">
            <p><AppIcon name="pin" :size="18" /> {{ t('contact.info.address') }}</p>
            <p><AppIcon name="phone" :size="18" /> {{ t('contact.info.phone') }}</p>
            <p><AppIcon name="mail" :size="18" /> {{ t('contact.info.email') }}</p>
          </div>
          <div class="map-embed">
            <iframe
              title="Localisation du dahira"
              src="https://www.google.com/maps?q=Dakar,Senegal&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="social-row">
            <a href="#" aria-label="WhatsApp"><AppIcon name="whatsapp" :size="20" /></a>
            <a href="#" aria-label="Facebook"><AppIcon name="facebook" :size="20" /></a>
            <a href="#" aria-label="Instagram"><AppIcon name="instagram" :size="20" /></a>
            <a href="#" aria-label="YouTube"><AppIcon name="youtube" :size="20" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

function onSubmit(e) {
  if (!e.target.checkValidity()) {
    e.target.reportValidity()
    return
  }
  submitted.value = true
  Object.assign(form, { name: '', email: '', message: '' })
  e.target.reset()
}
</script>

<template>
  <section class="section" id="rejoindre">
    <div class="container">
      <div class="join-wrap">
        <div class="join-intro" v-reveal>
          <span class="tag">{{ t('join.tag') }}</span>
          <h2>{{ t('join.title') }}</h2>
          <p>{{ t('join.desc') }}</p>
          <ul class="join-list">
            <li v-for="(item, i) in list" :key="i"><AppIcon name="check" :size="18" /> {{ item }}</li>
          </ul>
        </div>
        <form class="card-form" v-reveal novalidate @submit.prevent="onSubmit">
          <div class="form-row">
            <label for="j-name">{{ t('join.form.name') }}</label>
            <input type="text" id="j-name" v-model="form.name" required>
          </div>
          <div class="form-row">
            <label for="j-phone">{{ t('join.form.phone') }}</label>
            <input type="tel" id="j-phone" v-model="form.phone" required>
          </div>
          <div class="form-row">
            <label for="j-city">{{ t('join.form.city') }}</label>
            <input type="text" id="j-city" v-model="form.city">
          </div>
          <div class="form-row">
            <label for="j-msg">{{ t('join.form.message') }}</label>
            <textarea id="j-msg" v-model="form.message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">{{ t('join.form.submit') }}</button>
          <p class="form-success" role="status" v-if="submitted">{{ t('join.form.success') }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'

const { t, tm } = useI18n()
const list = computed(() => tm('join.list'))

const form = reactive({ name: '', phone: '', city: '', message: '' })
const submitted = ref(false)

function onSubmit(e) {
  if (!e.target.checkValidity()) {
    e.target.reportValidity()
    return
  }
  submitted.value = true
  // NOTE : brancher ici un envoi réel (backend, Formspree, EmailJS, etc.)
  Object.assign(form, { name: '', phone: '', city: '', message: '' })
  e.target.reset()
}
</script>

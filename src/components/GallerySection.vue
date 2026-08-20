<template>
  <section class="section section-alt" id="galerie">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="tag">{{ t('gallery.tag') }}</span>
        <h2>{{ t('gallery.title') }}</h2>
        <p class="lead">{{ t('gallery.lead') }}</p>
      </div>
      <div class="gallery-grid">
        <button
          v-for="(item, i) in items"
          :key="i"
          class="gallery-item"
          :class="{ 'span-2': i === 0, video: item.video }"
          :style="{ '--i': i + 1 }"
          v-reveal
          v-tilt
          @click="openLightbox(item.caption, i)"
        >
          <span class="gallery-ph"></span>
          <AppIcon v-if="item.video" name="play" :size="40" class="play-icon" />
          <span class="gallery-caption">{{ item.caption }}</span>
        </button>
      </div>
      <p class="gallery-note">{{ t('gallery.note') }}</p>
    </div>

    <!-- Lightbox -->
    <Transition name="lightbox">
      <div class="lightbox" v-if="lightboxOpen" @click.self="closeLightbox">
        <button class="lightbox-close" aria-label="Fermer" @click="closeLightbox">
          <AppIcon name="close" :size="26" />
        </button>
        <Transition name="lightbox-zoom" appear>
          <div class="lightbox-content" :key="lightboxCaption">
            <div class="lightbox-ph" :style="lightboxStyle"></div>
            <p class="lightbox-caption">{{ lightboxCaption }}</p>
          </div>
        </Transition>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'

const { t, tm } = useI18n()
const items = computed(() => tm('gallery.items'))

const lightboxOpen = ref(false)
const lightboxCaption = ref('')
const lightboxHue = ref(215)
const lightboxStyle = computed(() => ({
  background: `linear-gradient(135deg, hsl(${lightboxHue.value} 60% 30%), hsl(${lightboxHue.value} 70% 55%))`,
}))

function openLightbox(caption, i) {
  lightboxCaption.value = caption
  lightboxHue.value = 215 + (i + 1) * 8
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}
function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
function onKeydown(e) {
  if (e.key === 'Escape') closeLightbox()
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

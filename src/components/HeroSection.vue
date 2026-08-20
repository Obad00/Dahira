<template>
  <section class="hero" id="accueil">
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-gradient"></div>
      <canvas ref="canvasEl" id="particles"></canvas>
      <div class="hero-pattern"></div>
    </div>
    <div class="container hero-inner" v-reveal>
      <p class="eyebrow">{{ t('hero.eyebrow') }}</p>
      <h1 class="hero-title">
        {{ t('hero.titleLine1') }} <span class="text-gold">{{ t('hero.titleGold') }}</span>
      </h1>
      <blockquote class="hero-quote">
        <AppIcon name="quote" :size="28" />
        <p>{{ t('hero.quoteText') }}</p>
        <cite>{{ t('hero.quoteCite') }}</cite>
      </blockquote>
      <p class="hero-sub">{{ t('hero.sub') }}</p>
      <div class="hero-cta">
        <a href="#rejoindre" class="btn btn-primary">{{ t('common.ctaJoin') }} <AppIcon name="arrow" :size="18" /></a>
        <a href="#dons" class="btn btn-outline">{{ t('common.ctaDonate') }}</a>
      </div>
      <div class="hero-scroll" aria-hidden="true">
        <AppIcon name="chevron" :size="22" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const canvasEl = ref(null)
let ctx, particles = [], rafId = null, resizeHandler = null

function setupParticles() {
  const canvas = canvasEl.value
  if (!canvas || !canvas.getContext) return
  ctx = canvas.getContext('2d')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function resize() {
    canvas.width = canvas.offsetWidth * devicePixelRatio
    canvas.height = canvas.offsetHeight * devicePixelRatio
  }
  function createParticles() {
    const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 40000))
    particles = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 * devicePixelRatio + 0.5,
        vy: (Math.random() * 0.25 + 0.05) * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        o: Math.random() * 0.5 + 0.15,
      })
    }
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((p) => {
      p.y -= p.vy
      p.x += p.vx
      if (p.y < -10) p.y = canvas.height + 10
      if (p.x < -10) p.x = canvas.width + 10
      if (p.x > canvas.width + 10) p.x = -10
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${p.o})`
      ctx.fill()
    })
    if (!reduceMotion) rafId = requestAnimationFrame(draw)
  }

  resize()
  createParticles()
  draw()
  resizeHandler = () => {
    resize()
    createParticles()
  }
  window.addEventListener('resize', resizeHandler)
}

onMounted(setupParticles)
onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
})
</script>

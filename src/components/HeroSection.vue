<template>
  <section class="hero" id="accueil" ref="heroEl">
    <div class="hero-bg" aria-hidden="true" ref="bgEl">
      <div class="hero-gradient"></div>
      <canvas ref="canvasEl" id="particles"></canvas>
      <GeometricSignature />
      <div class="hero-pattern"></div>
      <div class="hero-grain"></div>
    </div>
    <div class="container hero-inner" ref="foreEl">
      <p class="eyebrow" v-reveal>{{ t('hero.eyebrow') }}</p>
      <h1 class="hero-title">
        <KineticText :text="t('hero.titleLine1')" tag="span" trigger="load" :delay="0.15" />{{ ' ' }}<span class="text-gold"><KineticText :text="t('hero.titleGold')" tag="span" trigger="load" :delay="0.45" /></span>
      </h1>
      <div class="hero-quote-row" v-reveal="750">
        <div class="hero-portrait" role="img" aria-label="Portrait de Cheikh Ahmadou Bamba (Serigne Touba)">
          <span class="hero-portrait-ring"></span>
        </div>
        <blockquote class="hero-quote glass-card">
          <AppIcon name="quote" :size="28" />
          <KineticText class="quote-kinetic" :text="t('hero.quoteText')" tag="p" trigger="load" :delay="0.9" />
          <cite>{{ t('hero.quoteCite') }}</cite>
        </blockquote>
      </div>
      <p class="hero-sub" v-reveal="1300">{{ t('hero.sub') }}</p>
      <div class="hero-cta" v-reveal="1450">
        <a href="#rejoindre" class="btn btn-primary" v-magnetic>{{ t('common.ctaJoin') }} <AppIcon name="arrow" :size="18" /></a>
        <a href="#dons" class="btn btn-outline" v-magnetic>{{ t('common.ctaDonate') }}</a>
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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppIcon from './AppIcon.vue'
import GeometricSignature from './GeometricSignature.vue'
import KineticText from './KineticText.vue'
import { prefersReducedMotion } from '../composables/motion'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const canvasEl = ref(null)
const heroEl = ref(null)
const bgEl = ref(null)
const foreEl = ref(null)
let ctx, particles = [], rafId = null, resizeHandler = null
let parallaxTrigger = null

function setupParticles() {
  const canvas = canvasEl.value
  if (!canvas || !canvas.getContext) return
  ctx = canvas.getContext('2d')
  const reduceMotion = prefersReducedMotion()

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

function setupParallax() {
  if (prefersReducedMotion() || !heroEl.value) return
  parallaxTrigger = ScrollTrigger.create({
    trigger: heroEl.value,
    start: 'top top',
    end: 'bottom top',
    scrub: 0.6,
    onUpdate: (self) => {
      gsap.set(bgEl.value, { yPercent: self.progress * 18 })
      gsap.set(foreEl.value, { yPercent: -self.progress * 10, opacity: 1 - self.progress * 0.6 })
    },
  })
}

onMounted(() => {
  setupParticles()
  setupParallax()
})
onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  parallaxTrigger?.kill()
})
</script>

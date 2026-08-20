<template>
  <component :is="tag" class="kinetic-text" ref="rootEl">
    <span v-for="(w, i) in words" :key="i" class="kw">{{ w }}<template v-if="i < words.length - 1">&nbsp;</template></span>
  </component>
</template>

<script setup>
// Découpe un texte en mots animés individuellement (fondu + léger effet 3D),
// soit au chargement (hero), soit au scroll (citations mises en avant plus
// bas dans la page). Reste un simple <span>/<h1>/<p> pour le SEO et le
// lecteur d'écran : le texte brut est toujours présent dans le DOM.
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../composables/motion'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'span' },
  trigger: { type: String, default: 'load' }, // 'load' | 'scroll'
  delay: { type: Number, default: 0 },
})

const words = computed(() => props.text.split(' '))
const rootEl = ref(null)
let st = null

function animate() {
  const el = rootEl.value
  if (!el) return
  const spans = el.querySelectorAll('.kw')
  if (prefersReducedMotion()) {
    gsap.set(spans, { opacity: 1, y: 0, rotateX: 0 })
    return
  }
  gsap.set(spans, { opacity: 0, y: 26, rotateX: -40, transformOrigin: '50% 100%' })
  const tween = () =>
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.045,
      delay: props.delay,
    })

  if (props.trigger === 'scroll') {
    st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: tween,
    })
  } else {
    tween()
  }
}

onMounted(() => requestAnimationFrame(animate))
onUnmounted(() => st?.kill())

// Réanime quand le texte change (ex. bascule FR/WO), pour garder l'effet vivant.
watch(() => props.text, () => requestAnimationFrame(animate))
</script>

<style>
.kinetic-text{ perspective:600px; display:inline; }
.kinetic-text .kw{ display:inline-block; will-change:transform,opacity; }
</style>

// Directive v-reveal : anime l'apparition au scroll via GSAP + ScrollTrigger.
// API inchangée par rapport à la version précédente (IntersectionObserver) :
// <div v-reveal> suffit. Nouveauté : les éléments qui partagent le même
// parent (ex. les cartes d'une grille en v-for) se voient automatiquement
// décalés (stagger) selon leur ordre, pour un effet de récit au scroll
// plutôt que tout qui apparaît d'un coup.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './motion'

gsap.registerPlugin(ScrollTrigger)

const staggerCounters = new WeakMap()
const MAX_STAGGER_STEPS = 5
const STEP = 0.09 // secondes entre deux éléments d'un même groupe

function nextStaggerIndex(parent) {
  if (!parent) return 0
  const n = staggerCounters.get(parent) ?? 0
  staggerCounters.set(parent, n + 1)
  return n
}

export const revealDirective = {
  mounted(el, binding) {
    el.classList.add('reveal')

    if (prefersReducedMotion()) {
      el.style.opacity = 1
      return
    }

    const explicitDelay = typeof binding.value === 'number' ? binding.value / 1000 : null
    const idx = explicitDelay === null ? nextStaggerIndex(el.parentElement) : 0
    const delay = explicitDelay ?? Math.min(idx, MAX_STAGGER_STEPS) * STEP

    gsap.set(el, { autoAlpha: 0, y: 34 })

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
        })
      },
    })
    el._revealTrigger = trigger
  },
  unmounted(el) {
    el._revealTrigger?.kill()
  },
}

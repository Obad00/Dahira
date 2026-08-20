// Smooth scroll premium (Lenis), synchronisé avec GSAP ScrollTrigger.
// Désactivé automatiquement si l'utilisateur préfère un mouvement réduit —
// le scroll natif reprend alors la main, ce qui reste parfaitement
// accessible et confortable.
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './motion'

let lenis = null

export function initLenis() {
  if (lenis || prefersReducedMotion()) return null

  gsap.registerPlugin(ScrollTrigger)

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // La hauteur réelle de la page (donc la limite de scroll que Lenis calcule)
  // dépend d'éléments qui finissent de charger après le montage initial :
  // la photo du portrait, les polices Google Fonts (Amiri change la hauteur
  // des lignes une fois chargée). En local, tout est déjà en cache, donc le
  // bug ne se voit pas — en production, la mesure prise trop tôt plafonne le
  // scroll avant le vrai bas de page et rend le footer inatteignable. On
  // recalcule donc explicitement une fois que tout est vraiment prêt.
  const refresh = () => {
    lenis?.resize()
    ScrollTrigger.refresh()
  }
  window.addEventListener('load', refresh)
  document.fonts?.ready?.then(refresh)
  // Filet de sécurité supplémentaire pendant les ~1,5s où le loader et les
  // animations d'entrée peuvent encore faire bouger la mise en page.
  setTimeout(refresh, 1600)

  // Fait passer les liens d'ancre (#section) par le scroll fluide de Lenis
  // plutôt qu'un saut instantané natif, avec un décalage pour le header sticky.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return
    const id = link.getAttribute('href')
    if (!id || id === '#') return
    const target = document.querySelector(id)
    if (!target) return
    e.preventDefault()
    lenis.scrollTo(target, { offset: -84, duration: 1.3 })
    history.pushState(null, '', id)
  })

  return lenis
}

export function getLenis() {
  return lenis
}

export function destroyLenis() {
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
}

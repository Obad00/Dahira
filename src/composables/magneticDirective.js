// Directive v-magnetic : effet "bouton magnétique" — l'élément suit
// légèrement le curseur quand il passe à proximité, puis revient à sa
// position d'origine en sortie. Desktop uniquement (pointeur fin),
// intensité volontairement discrète pour rester sobre.
import { gsap } from 'gsap'
import { prefersReducedMotion, hasFinePointer } from './motion'

const STRENGTH = 0.35 // 0 = immobile, 1 = suit le curseur à 100%
const MAX_OFFSET = 14 // px

export const magneticDirective = {
  mounted(el) {
    if (prefersReducedMotion() || !hasFinePointer()) return

    const quickX = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const quickY = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    function onMove(e) {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      quickX(gsap.utils.clamp(-MAX_OFFSET, MAX_OFFSET, relX * STRENGTH))
      quickY(gsap.utils.clamp(-MAX_OFFSET, MAX_OFFSET, relY * STRENGTH))
    }
    function onLeave() {
      quickX(0)
      quickY(0)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el._magneticCleanup = () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  },
  unmounted(el) {
    el._magneticCleanup?.()
  },
}

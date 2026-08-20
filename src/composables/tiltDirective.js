// Directive v-tilt : légère bascule 3D d'une carte selon la position du
// curseur (façon "tilt effect"), en plus du translateY déjà géré en CSS
// au survol. Desktop uniquement, angle volontairement faible (max 7°)
// pour rester élégant plutôt que gadget.
import { gsap } from 'gsap'
import { prefersReducedMotion, hasFinePointer } from './motion'

const MAX_TILT = 7 // degrés

export const tiltDirective = {
  mounted(el) {
    if (prefersReducedMotion() || !hasFinePointer()) return

    el.style.transformStyle = 'preserve-3d'
    el.style.willChange = 'transform'

    const quickRotX = gsap.quickTo(el, 'rotationX', { duration: 0.4, ease: 'power2.out' })
    const quickRotY = gsap.quickTo(el, 'rotationY', { duration: 0.4, ease: 'power2.out' })

    function onMove(e) {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width // 0..1
      const py = (e.clientY - rect.top) / rect.height
      quickRotY((px - 0.5) * MAX_TILT * 2)
      quickRotX(-(py - 0.5) * MAX_TILT * 2)
    }
    function onLeave() {
      quickRotX(0)
      quickRotY(0)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el._tiltCleanup = () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  },
  unmounted(el) {
    el._tiltCleanup?.()
  },
}

// Directive v-reveal : anime les éléments à l'apparition dans le viewport.
// Usage : <div v-reveal> ou <div v-reveal="120"> (délai en ms)
let io = null
function getObserver() {
  if (io || typeof IntersectionObserver === 'undefined') return io
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
  return io
}

export const revealDirective = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (typeof binding.value === 'number') {
      el.style.transitionDelay = binding.value + 'ms'
    }
    const observer = getObserver()
    if (observer) {
      observer.observe(el)
    } else {
      el.classList.add('is-visible')
    }
  },
}

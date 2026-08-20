<template>
  <Transition name="loader-fade" @after-leave="$emit('done')">
    <div v-if="visible" class="app-loader" role="status" aria-label="Chargement">
      <svg class="loader-mark" width="76" height="76" viewBox="0 0 24 24" fill="none">
        <path
          ref="pathEl"
          d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"
          stroke="url(#loaderGrad)"
          stroke-width="1.6"
          stroke-linejoin="round"
          fill="none"
        />
        <defs>
          <linearGradient id="loaderGrad" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0" stop-color="#8fb8f0" />
            <stop offset="1" stop-color="#c9a24b" />
          </linearGradient>
        </defs>
      </svg>
      <span class="loader-word">Dahira Nooru&nbsp;Touba</span>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../composables/motion'

defineEmits(['done'])
const visible = ref(true)
const pathEl = ref(null)

onMounted(() => {
  const hide = () => { visible.value = false }

  if (prefersReducedMotion()) {
    // Pas d'animation : on referme presque immédiatement.
    setTimeout(hide, 150)
    return
  }

  const path = pathEl.value
  const length = path.getTotalLength()
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

  const tl = gsap.timeline({ onComplete: hide })
  tl.to(path, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' })
    .to('.loader-word', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.5')
    .to({}, { duration: 0.35 }) // petite respiration avant de disparaître

  // Garde-fou : le loader ne doit jamais bloquer l'accès au site.
  setTimeout(hide, 2600)
})
</script>

<style scoped>
.app-loader{
  position:fixed;inset:0;z-index:1000;
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;
  background:linear-gradient(160deg,var(--blue-950),var(--blue-800));
}
.loader-mark{filter:drop-shadow(0 0 18px rgba(143,184,240,.35));}
.loader-word{
  font-family:var(--font-display);font-style:italic;color:var(--blue-100);
  font-size:1rem;letter-spacing:.02em;
  opacity:0;transform:translateY(8px);
}
.loader-fade-leave-active{transition:opacity .5s ease, visibility .5s;}
.loader-fade-leave-to{opacity:0;}
</style>

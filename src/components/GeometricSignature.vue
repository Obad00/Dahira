<template>
  <!-- Élément signature du site : rosette géométrique inspirée des motifs
       islamiques (étoiles à 8 branches), tracée en pur SVG (aucune
       dépendance 3D lourde), qui tourne doucement et réagit très
       légèrement à la position du curseur. -->
  <div class="geo-signature" ref="wrapEl" aria-hidden="true">
    <svg viewBox="0 0 400 400" class="geo-svg">
      <defs>
        <linearGradient id="geoGrad" x1="0" y1="0" x2="400" y2="400">
          <stop offset="0" stop-color="#9aaede" />
          <stop offset="1" stop-color="#c79a42" />
        </linearGradient>
      </defs>
      <g class="geo-ring geo-ring--slow">
        <polygon :points="star(200, 200, 8, 168, 96)" />
        <polygon :points="star(200, 200, 8, 168, 96, 22.5)" />
      </g>
      <g class="geo-ring geo-ring--reverse">
        <circle cx="200" cy="200" r="186" />
        <polygon :points="star(200, 200, 12, 140, 118)" />
      </g>
      <g class="geo-ring geo-ring--slow2">
        <circle cx="200" cy="200" r="70" />
        <polygon :points="star(200, 200, 8, 60, 34)" />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { prefersReducedMotion, hasFinePointer } from '../composables/motion'

const wrapEl = ref(null)

function star(cx, cy, points, outerR, innerR, rotationDeg = 0) {
  const step = Math.PI / points
  const rot = (rotationDeg * Math.PI) / 180
  const pts = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR
    const a = i * step - Math.PI / 2 + rot
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}

let quickX, quickY, onMove

onMounted(() => {
  if (prefersReducedMotion() || !hasFinePointer() || !wrapEl.value) return
  quickX = gsap.quickTo(wrapEl.value, 'x', { duration: 0.9, ease: 'power2.out' })
  quickY = gsap.quickTo(wrapEl.value, 'y', { duration: 0.9, ease: 'power2.out' })
  onMove = (e) => {
    const nx = e.clientX / window.innerWidth - 0.5
    const ny = e.clientY / window.innerHeight - 0.5
    quickX(nx * 24)
    quickY(ny * 24)
  }
  window.addEventListener('mousemove', onMove)
})
onUnmounted(() => {
  if (onMove) window.removeEventListener('mousemove', onMove)
})
</script>

<style scoped>
.geo-signature{
  position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  pointer-events:none;z-index:1;
}
.geo-svg{width:min(78vh,780px);height:min(78vh,780px);max-width:110%;opacity:.16;}
.geo-ring{
  fill:none;stroke:url(#geoGrad);stroke-width:.6;
  transform-origin:200px 200px;
}
.geo-ring--slow{animation:geoSpin 140s linear infinite;}
.geo-ring--reverse{animation:geoSpin 190s linear infinite reverse;}
.geo-ring--slow2{animation:geoSpin 100s linear infinite;}
@keyframes geoSpin{to{transform:rotate(360deg);}}

@media (prefers-reduced-motion: reduce){
  .geo-ring{animation:none;}
}
</style>

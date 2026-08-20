<template>
  <div v-if="enabled" class="custom-cursor" :class="{ 'is-hover': isHover, 'is-down': isDown }" ref="cursorEl" aria-hidden="true">
    <span class="cursor-dot"></span>
    <span class="cursor-ring"></span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { prefersReducedMotion, hasFinePointer } from '../composables/motion'

const enabled = hasFinePointer() && !prefersReducedMotion()
const cursorEl = ref(null)
const isHover = ref(false)
const isDown = ref(false)

let quickX, quickY

function onMove(e) {
  quickX?.(e.clientX)
  quickY?.(e.clientY)
  const target = e.target.closest('a, button, [data-cursor-hover]')
  isHover.value = !!target
}
function onDown() { isDown.value = true }
function onUp() { isDown.value = false }

onMounted(() => {
  if (!enabled || !cursorEl.value) return
  document.body.classList.add('has-custom-cursor')
  quickX = gsap.quickTo(cursorEl.value, 'x', { duration: 0.15, ease: 'power2.out' })
  quickY = gsap.quickTo(cursorEl.value, 'y', { duration: 0.15, ease: 'power2.out' })
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mousedown', onDown)
  window.addEventListener('mouseup', onUp)
})
onUnmounted(() => {
  document.body.classList.remove('has-custom-cursor')
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mousedown', onDown)
  window.removeEventListener('mouseup', onUp)
})
</script>

<style scoped>
.custom-cursor{
  position:fixed;top:0;left:0;z-index:999;pointer-events:none;
  transform:translate(-50%,-50%);
}
.cursor-dot{
  position:absolute;top:0;left:0;transform:translate(-50%,-50%);
  width:6px;height:6px;border-radius:50%;background:var(--gold);
  transition:transform .2s var(--ease);
}
.cursor-ring{
  position:absolute;top:0;left:0;transform:translate(-50%,-50%);
  width:34px;height:34px;border-radius:50%;
  border:1.5px solid rgba(47,107,214,.5);
  transition:width .25s var(--ease), height .25s var(--ease), border-color .25s var(--ease), opacity .25s var(--ease);
}
.custom-cursor.is-hover .cursor-ring{width:52px;height:52px;border-color:var(--gold);}
.custom-cursor.is-hover .cursor-dot{transform:translate(-50%,-50%) scale(0);}
.custom-cursor.is-down .cursor-ring{width:26px;height:26px;}
</style>

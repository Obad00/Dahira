<template>
  <div class="cd-unit glass-card">
    <div class="flip-wrap">
      <span class="flip-value" ref="valueEl">{{ shown }}</span>
    </div>
    <small>{{ label }}</small>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../composables/motion'

const props = defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
})

const shown = ref(props.value)
const valueEl = ref(null)

watch(
  () => props.value,
  (next, prev) => {
    if (next === prev) return
    if (prefersReducedMotion() || !valueEl.value) {
      shown.value = next
      return
    }
    gsap
      .timeline()
      .to(valueEl.value, { rotationX: -95, duration: 0.16, ease: 'power1.in' })
      .call(() => { shown.value = next })
      .to(valueEl.value, { rotationX: 0, duration: 0.32, ease: 'back.out(1.6)' })
  }
)
</script>

<style scoped>
.flip-wrap{ perspective:260px; }
.flip-value{
  display:inline-block;
  transform-style:preserve-3d;
  will-change:transform;
}
</style>

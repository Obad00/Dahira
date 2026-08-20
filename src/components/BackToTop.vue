<template>
  <button v-if="visible" class="back-to-top" aria-label="Retour en haut" @click="scrollTop">
    <svg width="20" height="20" style="transform:rotate(-90deg)"><use href="#icon-arrow" /></svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
function onScroll() {
  visible.value = window.scrollY > 500
}
function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => document.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => document.removeEventListener('scroll', onScroll))
</script>

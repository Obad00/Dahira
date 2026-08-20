<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <a href="#accueil" class="brand">
        <span class="brand-mark" aria-hidden="true"><AppIcon name="moon" :size="26" /></span>
        <span class="brand-text">
          <strong>{{ t('common.brandTop') }}</strong> {{ t('common.brandBottom') }}
        </span>
      </a>

      <nav class="main-nav" :class="{ open: menuOpen }" aria-label="Navigation principale">
        <ul>
          <li v-for="link in navLinks" :key="link.id">
            <a :href="`#${link.id}`" @click="closeMenu">{{ t(`nav.${link.id === 'apropos' ? 'apropos' : link.id}`) }}</a>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <button class="lang-toggle" type="button" :aria-label="t('common.langToggle')" @click="onToggleLocale">
          FR / WO
        </button>
        <button class="theme-toggle" type="button" :aria-label="t('common.themeToggle')" @click="toggleTheme">
          <AppIcon v-if="!isDark" name="sun" :size="20" />
          <AppIcon v-else name="moon" :size="20" />
        </button>
        <a href="#dons" class="btn btn-gold btn-sm" v-magnetic>{{ t('common.ctaDonate') }}</a>
        <button
          class="menu-toggle"
          type="button"
          :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="24" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { toggleLocale } from '../i18n'
import { useTheme } from '../composables/useTheme'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const { theme, toggleTheme } = useTheme()
const isDark = computed(
  () => theme.value === 'dark' || (!theme.value && window.matchMedia('(prefers-color-scheme: dark)').matches)
)

const navLinks = [
  { id: 'apropos' },
  { id: 'khalife' },
  { id: 'evenements' },
  { id: 'galerie' },
  { id: 'social' },
  { id: 'bibliotheque' },
  { id: 'actualites' },
  { id: 'contact' },
]

const menuOpen = ref(false)
function closeMenu() {
  menuOpen.value = false
}
watch(menuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

function onToggleLocale() {
  toggleLocale()
}

const isScrolled = ref(false)
function onScroll() {
  isScrolled.value = window.scrollY > 30
}
onMounted(() => document.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => document.removeEventListener('scroll', onScroll))
</script>

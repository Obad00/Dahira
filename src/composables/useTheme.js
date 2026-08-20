import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'dahira-theme'
const saved = localStorage.getItem(STORAGE_KEY)
const theme = ref(saved === 'dark' || saved === 'light' ? saved : null)

watchEffect(() => {
  if (theme.value) {
    document.documentElement.setAttribute('data-theme', theme.value)
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
})

export function useTheme() {
  function toggleTheme() {
    const isDark =
      theme.value === 'dark' ||
      (!theme.value && window.matchMedia('(prefers-color-scheme: dark)').matches)
    theme.value = isDark ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, theme.value)
  }
  return { theme, toggleTheme }
}

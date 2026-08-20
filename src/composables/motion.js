// Utilitaire partagé : respecte la préférence système "mouvement réduit".
// Toutes les animations (GSAP, Lenis, tilt, curseur...) doivent vérifier
// ce flag avant de s'exécuter, conformément aux garde-fous d'accessibilité.
export function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Souris fine (desktop) ou doigt (mobile/tablette) — sert à désactiver
// tilt/curseur personnalisé/effet magnétique sur les écrans tactiles,
// où ces micro-interactions n'ont pas de sens et coûtent en performance.
export function hasFinePointer() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches
}

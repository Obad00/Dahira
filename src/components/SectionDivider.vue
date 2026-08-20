<template>
  <!-- Séparateur organique entre deux sections, pour remplacer les
       arêtes droites par une courbe fluide. `fill` reprend la couleur de
       la section qui SUIT le divider (celle qui "monte" par-dessus). -->
  <div class="section-divider" :class="{ 'is-flipped': flip }" aria-hidden="true">
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
      <path
        d="M0,32 C 240,90 480,0 720,24 C 960,48 1200,88 1440,30 L1440,90 L0,90 Z"
        :fill="fill"
      />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  fill: { type: String, default: 'var(--bg-alt)' },
  flip: { type: Boolean, default: false },
})
</script>

<style scoped>
.section-divider{
  position:relative;line-height:0;pointer-events:none;
  margin-top:-1px; /* évite un liseré de 1px entre section et divider */
}
.section-divider svg{width:100%;height:56px;display:block;}
.section-divider.is-flipped{transform:scaleY(-1);}
@media(max-width:640px){ .section-divider svg{height:34px;} }
</style>

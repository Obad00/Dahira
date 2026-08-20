<template>
  <!-- Formes organiques en fond de section : deux taches floues qui
       dérivent très lentement, pour casser le flat design sans distraire
       de la lecture (faible opacité, jamais au-dessus du texte). -->
  <div class="organic-blob" aria-hidden="true">
    <span class="blob blob--a"></span>
    <span class="blob blob--b"></span>
  </div>
</template>

<style scoped>
.organic-blob{
  position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;
}
.blob{
  position:absolute;border-radius:50%;filter:blur(70px);opacity:.35;
}
.blob--a{
  width:420px;height:420px;top:-120px;left:-100px;
  background:radial-gradient(circle, var(--blue-400), transparent 70%);
  animation:blobDriftA 24s ease-in-out infinite;
}
.blob--b{
  width:360px;height:360px;bottom:-140px;right:-80px;
  background:radial-gradient(circle, var(--gold-soft), transparent 70%);
  animation:blobDriftB 28s ease-in-out infinite;
}
@keyframes blobDriftA{
  0%,100%{transform:translate(0,0) scale(1);}
  50%{transform:translate(40px,30px) scale(1.12);}
}
@keyframes blobDriftB{
  0%,100%{transform:translate(0,0) scale(1);}
  50%{transform:translate(-30px,-24px) scale(1.08);}
}
</style>

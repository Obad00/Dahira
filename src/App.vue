<template>
  <IconSprite />
  <a href="#main" class="skip-link">Aller au contenu principal</a>

  <AppHeader />
  <WolofNotice />

  <main id="main">
    <HeroSection />
    <AboutSection />
    <KhalifeSection />
    <EventsSection />
    <GallerySection />
    <SocialSection />
    <LibrarySection />
    <DonateSection />
    <JoinSection />
    <NewsSection />
    <ContactSection />
  </main>

  <AppFooter />
  <BackToTop />
</template>

<script setup>
import IconSprite from './components/IconSprite.vue'
import AppHeader from './components/AppHeader.vue'
import WolofNotice from './components/WolofNotice.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import KhalifeSection from './components/KhalifeSection.vue'
import EventsSection from './components/EventsSection.vue'
import GallerySection from './components/GallerySection.vue'
import SocialSection from './components/SocialSection.vue'
import LibrarySection from './components/LibrarySection.vue'
import DonateSection from './components/DonateSection.vue'
import JoinSection from './components/JoinSection.vue'
import NewsSection from './components/NewsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import BackToTop from './components/BackToTop.vue'
</script>

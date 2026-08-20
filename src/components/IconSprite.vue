<template>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <symbol id="icon-menu" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
      <symbol id="icon-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
      <symbol id="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
      <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
      <symbol id="icon-whatsapp" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 8.3c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.5.2.6.7 1.9.7 2 .1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.2.7.6 1 1.3 1.8 2.3 2.4.3.2.5.1.7-.1.2-.2.7-.8.9-1 .2-.2.4-.2.6-.1.7.3 1.9.9 2.2 1 .3.1.5.2.6.4.1.2.1 1-.3 1.5-.4.6-1.6 1.1-2.3 1.1-1.4.1-3.5-.6-5.5-2.5-2.1-2-3.1-4.1-3.2-4.4-.1-.3-.9-1.5-.8-2.9.1-1.1.6-1.6.8-1.9z" fill="currentColor"/></symbol>
      <symbol id="icon-facebook" viewBox="0 0 24 24"><path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3h-3V9.7c0-.4.3-.7.5-.7z" fill="currentColor"/></symbol>
      <symbol id="icon-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/></symbol>
      <symbol id="icon-youtube" viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" stroke-width="1.8"/><path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor"/></symbol>
      <symbol id="icon-pin" viewBox="0 0 24 24"><path d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.8"/></symbol>
      <symbol id="icon-phone" viewBox="0 0 24 24"><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
      <symbol id="icon-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8"/></symbol>
      <symbol id="icon-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
      <symbol id="icon-book" viewBox="0 0 24 24"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
      <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.1C.5 8.6 2.3 5 6 5c2 0 3.5 1.1 4.5 2.6C11.5 6.1 13 5 15 5c3.7 0 5.5 3.6 4 6.9C19.5 16.4 12 21 12 21z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>
      <symbol id="icon-users" viewBox="0 0 24 24"><circle cx="8.5" cy="8" r="3" stroke="currentColor" stroke-width="1.8"/><circle cx="16.5" cy="9" r="2.4" stroke="currentColor" stroke-width="1.8"/><path d="M2.5 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5M14.5 20c.3-2.5 1.8-4 3.8-4.3 1.7-.2 3.4.7 4.2 2.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
      <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
      <symbol id="icon-play" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6"/><path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor"/></symbol>
      <symbol id="icon-quote" viewBox="0 0 24 24"><path d="M4 8c0-2.2 1.8-4 4-4v2.4c-1 0-1.6.6-1.6 1.6H8v4H4zM13 8c0-2.2 1.8-4 4-4v2.4c-1 0-1.6.6-1.6 1.6H17v4h-4z" fill="currentColor"/></symbol>
      <symbol id="icon-chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
      <symbol id="icon-wave" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><path d="M7 14c1.5-3 2.5-5 3-5s1 3 1.5 3 1-3 1.5-3 1.5 2 3 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></symbol>
      <symbol id="icon-om" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><path d="M8 15V9l4 4 4-4v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></symbol>
      <symbol id="icon-paypal" viewBox="0 0 24 24"><path d="M7 5h6c2.5 0 4 1.5 3.6 3.8-.4 2.6-2.3 4-4.9 4H9.6L8.7 18H6zM9.9 10.8h1.7c1.2 0 2.1-.6 2.3-1.9.2-1.2-.5-1.8-1.7-1.8H10.6z" fill="currentColor"/></symbol>
      <symbol id="icon-download" viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
      <symbol id="icon-headphones" viewBox="0 0 24 24"><path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" stroke-width="1.8"/><rect x="2.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" stroke-width="1.8"/><rect x="17.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" stroke-width="1.8"/></symbol>
      <symbol id="icon-check" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
    </defs>
  </svg>
</template>

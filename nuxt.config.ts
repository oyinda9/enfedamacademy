import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-03-08',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css', 
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
 
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS module
    [
      '@nuxtjs/google-fonts', // Google Fonts module
      {
        families: {
          'Space Grotesk': [300, 400, 500, 700],
          Sen: true,
          Poppins: true,
          Inter: true,
        },
        display: 'swap', // Recommended for performance
        prefetch: true, // Optional, improves initial loading speed
        download: true, // Optional, downloads fonts on first visit
      },
    ],
  ],
  vite: {
    plugins: [],
  },
});
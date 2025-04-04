export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt',
  ],

  css: ['~/assets/styles/reset.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/main.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      twitchClientId: process.env.TWITCH_CLIENT_ID,
    },
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
  },
})

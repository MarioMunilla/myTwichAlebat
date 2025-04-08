export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: false,

  app: {
    baseURL: '/myTwichAlebat/',
  },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts'],

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
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,

    public: {
      twitchClientId: process.env.TWITCH_CLIENT_ID,
    },
  },
})

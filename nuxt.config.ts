export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  colorMode: {
    classSuffix: '',
  },

  googleFonts: {
    families: {
      Roboto: true,
      Mulish: true,
    },
  },

  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fr: {
          welcome: 'Bienvenue',
        },
      },
    },
  },

  image: {
    domains: ['https://images.unsplash.com', 'https://source.unsplash.com'],
  },

  modules: [
    '@formkit/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],

  typescript: {
    shim: false,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
})

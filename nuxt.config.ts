// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "./plugins/vuetify";
import { resolve } from "path";
// import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: [
    '@pinia/nuxt', 
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],
  plugins: [
    '~/plugins/vuetify.ts'
  ],
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '/assets/css/main.scss'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: true,
    define: {
      'process.env': {} ,
    },
    vue: {
      customElement: true
    },
  },
  // app: {
  //   // global transition
  //   pageTransition: { name: 'page', mode: 'out-in' },
  //   layoutTransition: { name: 'layout', mode: 'out-in' },
  // },
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  // content
  content: {
    documentDriven: false,
    markdown: {
      mdc: true,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: 'noopener noreferer'
          }
        ]
      ]
    },
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      theme: 'github-dark',
      // Define languages you expect to use
      preload: ['java','javascript','python']
    },
  },
  devtools: { enabled: true }
})


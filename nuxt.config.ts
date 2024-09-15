// https://nuxt.com/docs/api/configuration/nuxt-config
// import vuetify from "./plugins/vuetify";
import { resolve } from "path";
// import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  ssr: true,
  components: true,
  alias: {
    "@": resolve(__dirname, "/"),
  },

  modules: ['@pinia/nuxt', '@nuxt/content', '@nuxtjs/color-mode', "nuxt-csurf", '@nuxt/image'],

  plugins: [
    '~/plugins/vuetify.ts'
  ],

  css: [
    '/assets/css/main.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  build: {
    analyze: true,
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env': {},
    },
    server: {
      watch: {
        usePolling: true
      }
    },
    vue: {
      customElement: true,
    },
  },

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
      theme: {
        default: 'monokai',
        dark: 'github-dark'
      },
      preload: ['java', 'js', 'ts', 'python', 'vue', 'html', 'scss']
    },
  },

  devtools: { enabled: false },

  runtimeConfig: {
    email: '',
    emailPass: ''
  },

  csurf: { // optional
    https: false, // default true if in production
    cookieKey: 'csrf', // "__Host-csrf" if https is true otherwise just "csrf"
    cookie: { // CookieSerializeOptions from unjs/cookie-es
      path: '/',
      httpOnly: true,
      sameSite: 'strict'
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH'], // the request methods we want CSRF protection for
    excludedUrls: ['/nocsrf1', ['/nocsrf2/.*', 'i']], // any URLs we want to exclude from CSRF protection
    // encryptSecret: /** a 32 bits secret */, // only for non serverless runtime, random bytes by default
    encryptAlgorithm: 'aes-256-cbc' // by default 'aes-256-cbc' (node), 'AES-CBC' (serverless)
  },

})
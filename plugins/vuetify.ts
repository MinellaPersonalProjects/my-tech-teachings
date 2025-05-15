// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme: {
          dark: false,
          colors: {
            primary: '#4F46E5',        
            secondary: '#E0F2FE',      
            background: '#ffffff',
            surface: '#f5f7fa',        
            'on-primary': '#ffffff',
            'on-secondary': '#1E3A8A', 
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
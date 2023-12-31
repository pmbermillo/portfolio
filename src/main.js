import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import {aliases,fa} from 'vuetify/iconsets/fa'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// const myCustomLightTheme = {
//     dark: false,
//     colors: {
//       background: 'red',
//       surface: '#FFFFFF',
//       primary: '#6200EE',
//       'primary-darken-1': '#3700B3',
//       secondary: '#03DAC6',
//       'secondary-darken-1': '#018786',
//       error: '#B00020',
//       info: '#2196F3',
//       success: '#4CAF50',
//       warning: '#FB8C00',
//     },
//   }

const vuetify = createVuetify({
  components,
  directives,
  icons:{
    defaultSet: 'fa',
    aliases,
    sets: {
        fa,
    }
  },
//   theme: {
//     defaultTheme: 'myCustomLightTheme',
//     themes: {
//       myCustomLightTheme,
//     },
//   },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify);

app.mount('#app')

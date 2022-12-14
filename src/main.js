import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import './assets/main.sass'

import messages from './i18n/index.js'

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  legacy: false,
  messages
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')

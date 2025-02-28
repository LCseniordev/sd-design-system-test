import './assets/tailwind.css'

import { createApp } from 'vue'

import App from './App.vue'

import { installPrimeVue } from './plugin'

const app = createApp(App)
installPrimeVue(app)

app.mount('#app')

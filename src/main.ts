import { createApp, provide } from 'vue'
import App from './App.vue'
import { state } from './types'

state.current = "home"
createApp(App).mount('#app')
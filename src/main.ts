import { createApp } from 'vue'
import { createPinia} from 'pinia'
import {MotionPlugin} from '@vueuse/motion'
import router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia();

app.use(MotionPlugin)
app.use(pinia)
app.use(router)
app.mount('#app')
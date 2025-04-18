import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "./router";
import {naiveUI} from "./utils/naiveUI";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(router)
    .use(pinia)
    .use(naiveUI)
    .mount('#app')

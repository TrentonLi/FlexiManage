import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "./router";
import {naiveUI} from "./utils/naiveUI.ts";

const pinia = createPinia()
const app = createApp(App)

app.use(router)
    .use(pinia)
    .use(naiveUI)
    .mount('#app')

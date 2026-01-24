import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import PrimeVue from 'primevue/config'

createApp(App).use(router).use(i18n).use(PrimeVue).mount('#app')

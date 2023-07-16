import { createApp } from 'vue';
import App from './app/App.vue';
import './app/styles/app.scss';
import router from 'shared/config/routeConfig';
import { i18n } from 'shared/config/i18n';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(i18n).use(router).use(pinia).mount('#app');

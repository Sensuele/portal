import { createApp } from 'vue'
import App from './app/App.vue'
import './app/styles/app.scss';
import router from 'shared/config/routeConfig';

const app = createApp(App);
app.use(router).mount('#app');
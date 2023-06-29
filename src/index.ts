import { createApp } from 'vue'
import App from './app/App.vue'
import './app/styles/app.scss';
import router from './router/routing';

const app = createApp(App);
app.use(router).mount('#app');
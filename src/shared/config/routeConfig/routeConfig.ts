import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    { name: 'Home', path: '/', component: () => import('pages/MainPage') },
    { name: 'About', path: '/about', component: () => import('pages/About.vue') },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;
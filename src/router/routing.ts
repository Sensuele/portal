import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/about', component: () => import('../pages/About.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;
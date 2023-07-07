import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    { name: 'Home', path: '/', component: () => import('pages/MainPage') },
    { name: 'About', path: '/about', component: () => import('pages/About.vue') },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: () => import('pages/NotFoundPage.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export enum RoutePaths {
  MAIN = '/',
  ABOUT = '/about',
  PROFILE = '/profile'
}

export enum RouteNames {
  MAIN = 'Home',
  ABOUT = 'About',
  PROFILE = 'Profile'
}

export const routes: Array<RouteRecordRaw> = [
  { name: RouteNames.MAIN, path: RoutePaths.MAIN, component: () => import('pages/MainPage') },
  { name: RouteNames.ABOUT, path: RoutePaths.ABOUT, component: () => import('pages/About.vue') },
  { name: RouteNames.PROFILE, path: RoutePaths.PROFILE, component: () => import('pages/ProfilePage') },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('pages/NotFoundPage.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;

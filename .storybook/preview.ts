import type { Preview } from '@storybook/vue3';
import '../src/app/styles/app.scss';
import { i18n } from '../src/shared/config/i18n';
import { setup  } from '@storybook/vue3';
import { createRouter, createWebHashHistory } from 'vue-router/dist/vue-router';
import { routes } from '../src/shared/config/routeConfig';
import { createPinia } from 'pinia';

const router = createRouter({
  history: createWebHashHistory('/iframe.html?id=modules-crm--base#'),
  routes
});

setup((app) => {
  app.use(i18n);
  app.use(router);
  app.use(createPinia());
})


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};
export default preview;

import type { Preview } from '@storybook/vue3';
import '../src/app/styles/app.scss';
import { i18n } from '../src/shared/config/i18n';
import { setup  } from '@storybook/vue3';
setup((app) => {
  app.use(i18n)
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

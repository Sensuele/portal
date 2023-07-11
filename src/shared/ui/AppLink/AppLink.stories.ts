import AppLink from './AppLink.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  },
};

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AppLink },
  methods: {
    action: action('changeTheme')
  },

  setup() {
    return { args };
  },

  // Here we define the `template`
  template: `<div :class="args.appTheme"  class="app" style="width: 100vw; height: 100vh;">
          <app-link @click='action' :to="'/'" v-bind="args" >Link </app-link>
        </div>`
});

export const Base = Template.bind({});


import Navbar from './Navbar.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'shared/Navbar',
  component: Navbar,
  argTypes: {
    appTheme: {
      control: 'radio',
      options: ['dark', 'light']
    }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Navbar },
  methods: {},

  setup() {
    return { args };
  },

  // Here we define the `template`
  template: `<div :class="args.appTheme"  class="app" style="width: 100vw; height: 100vh;">
          <navbar v-bind="args" />
        </div>`
});

export const Base = Template.bind({});
Base.args = {
  appTheme: 'dark'
};

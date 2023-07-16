import { StoryFn } from '@storybook/vue3';
import Sidebar from './Sidebar.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'shared/Sidebar',
  component: Sidebar,
  argTypes: {
    theme: {
      control: 'radio',
      options: ['dark', 'light']
    }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template: StoryFn<typeof Sidebar> = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Sidebar },
  methods: {
    action: action('changeTheme')
  },

  setup() {
    return { args };
  },

  // Here we define the `template`
  template: `<div :class="args.theme"  class="app" style="width: 100vw; height: 100vh;">
          <sidebar @toggle-theme="action" v-bind="args" />
        </div>`
});

export const Base = Template.bind({});
Base.args = {
  theme: 'dark'
};

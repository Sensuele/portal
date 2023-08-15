import { StoryFn } from '@storybook/vue3';
import ProfilePage from './ProfilePage.vue';

export default {
  title: 'shared/Navbar',
  component: ProfilePage,
  argTypes: {
    appTheme: {
      control: 'radio',
      options: ['dark_theme', 'light_theme']
    }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template: StoryFn<typeof ProfilePage> = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ProfilePage },
  methods: {},

  setup() {
    return { args };
  },

  // Here we define the `template`
  template: `<div :class="args.appTheme"  class="app" style="width: 100vw; height: 100vh;">
          <profile-page v-bind="args" />
        </div>`
});

export const Base = Template.bind({});

import Text from './Text.vue';
import { TextTheme } from './TextTypes';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    appTheme: {
      control: 'radio',
      options: ['dark_theme', 'light_theme'],
      table: { defaultValue: { summary: 'dark_theme' } }
    },
    textTheme: {
      control: 'radio',
      options: [TextTheme.ERROR, TextTheme.NORMAL]
    }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Text },

  setup() {
    return { args };
  },

  // Here we define the `template`
  template: `<div :class="args.appTheme ? args.appTheme : 'dark_theme'"  class="app" style="width: 100vw; height: 100vh; padding: 50px">
          <Text v-bind="args" :theme="args.textTheme" />
        </div>`
});

export const Primary = Template.bind({});
export const Outline = Template.bind({});

Primary.args = {
  title: 'Title lorem',
  text: 'Description text'
};

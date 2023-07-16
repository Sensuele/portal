import { Meta, StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import Button from './Button.vue';
import { ButtonSize, ThemeButton } from './types';

export default {
  title: 'shared/button',
  component: Button,
  argTypes: {
    appTheme: {
      control: 'radio',
      options: ['dark', 'light'],
      table: { defaultValue: { summary: 'light' } }
    },
    size: {
      control: 'radio',
      options: [ButtonSize.L, ButtonSize.M, ButtonSize.XL]
    }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  methods: {
    action: action('click')
  },
  setup() {
    return { args };
  },
  template: `<div :class="args.appTheme ? args.appTheme : 'dark'" class="app" style="margin: 0 auto; padding: 40px 0"><Button v-bind="args" @click="action"><span>Button label</span></Button></div>`
});

export const Clear = Template.bind({});
export const Outline = Template.bind({});

Clear.args = {
  theme: ThemeButton.CLEAR,
  size: ButtonSize.L
};

Outline.args = {
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.L
};

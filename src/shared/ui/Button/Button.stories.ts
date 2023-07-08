import { Meta, StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import Button from './Button.vue';
import { ThemeButton } from './types';

export default {
  title: 'shared/button',
  component: Button,
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
  template: `<div style="max-width: 460px; margin: 0 auto; padding: 40px 0"><Button v-bind="args" @click="action"><span>Button label</span></Button></div>`
});

export const Primary = Template.bind({});


Primary.args = {
  type: 'submit',
  theme: ThemeButton.CLEAR
};

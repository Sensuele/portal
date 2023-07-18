import BaseInput from './Input.vue';
import { ref } from 'vue';

export default {
  title: 'shared/BaseInput',
  component: BaseInput,
  argTypes: {
    appTheme: {
      control: 'radio',
      options: ['dark_theme', 'light_theme'],
      table: { defaultValue: { summary: 'dark_theme' } }
    }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseInput },

  setup() {
    const text = ref('');

    return { args, text };
  },

  // Here we define the `template`
  template: `<div :class="args.appTheme ? args.appTheme : 'dark_theme'"  class="app" style="width: 100vw; height: 100vh; padding: 50px">
            {{text}} <br />
          <base-input v-model:modelValue="text" />
        </div>`
});

export const Base = Template.bind({});

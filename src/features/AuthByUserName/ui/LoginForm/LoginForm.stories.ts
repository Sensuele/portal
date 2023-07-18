import LoginForm from './LoginForm.vue';
import { ref } from 'vue';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
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
  components: { LoginForm },

  setup() {
    return { args };
  },

  // Here we define the `template`
  template: `<div :class="args.appTheme ? args.appTheme : 'dark_theme'"  class="app" style="width: 100vw; height: 100vh; padding: 50px">
          <login-form  > </login-form>
        </div>`
});

export const Base = Template.bind({});

import Modal from './Modal.vue';
import Btn from '../Button/Button.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
};

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Modal, Btn },

  methods: {
    confirm: action('confirm')
  },

  data() {
    return { visible: false };
  },

  setup() {
    return { args };
  },

  // Here we define the `template`
  template: `<div :class="args.appTheme"  class="app" style="width: 100vw; height: 100vh;">
            <btn  @click="visible = true">Open modal</btn>
            <Modal :class="args.appTheme" v-model:visible="visible">
            <template #body>
              <p>Hello from the modal!</p>
            </template>
                <template #footer>
                  <btn>Agree</btn>
                </template>
            </Modal>
        </div>`
});

export const Base = Template.bind({});

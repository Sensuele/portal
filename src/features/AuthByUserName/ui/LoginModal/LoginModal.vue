<template>
  <div>
    <modal v-model:visible="innerVisible" :class-name="'login-modal'">
      <template #body>
        <div>
          <login-form />
        </div>
      </template>
    </modal>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Modal from 'shared/ui/Modal/Modal.vue';
import LoginForm from '../LoginForm/LoginForm.vue';

interface Props {
  visible: boolean;
  to?: string;
}

interface Emits {
  (e: 'update:visible', value: boolean): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const innerVisible = ref(false);

watch(
  () => props.visible,
  () => (innerVisible.value = props.visible),
  { immediate: true }
);

watch(innerVisible, () => {
  emit('update:visible', innerVisible.value);
});
</script>

<style scoped lang="scss">
:deep {
  .login-modal {
    width: 400px;

  }
}
</style>

<template>
  <div>
    <modal v-model:visible="innerVisible" :class-name="'login-modal'">
      <template #body>
        <div>
          <login-form @logged-in="onLoggedIn" :loading="loading" />
        </div>
      </template>
    </modal>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Modal from 'shared/ui/Modal/Modal.vue';
import LoginForm from '../LoginForm/LoginForm.vue';
import { LoginSchema } from '../../model/types/loginSchema';

interface Props {
  visible: boolean;
  to?: string;
  loading?: boolean;
}

interface Emits {
  (e: 'update:visible', value: boolean): void;
  (e: 'loggedIn', values): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const innerVisible = ref(false);

const onLoggedIn = (values: LoginSchema) => {
  emits('loggedIn', values);
};

watch(
  () => props.visible,
  () => (innerVisible.value = props.visible),
  { immediate: true }
);

watch(innerVisible, () => {
  emits('update:visible', innerVisible.value);
});
</script>

<style scoped lang="scss">
:deep {
  .login-modal {
    width: 400px;
  }
}
</style>

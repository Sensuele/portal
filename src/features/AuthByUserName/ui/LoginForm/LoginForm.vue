<template>
  <div class="login-form">
    <div class="input-container">
      <base-input v-model="formState.username" />
      <label>Login</label>
    </div>
    <div class="input-container">
      <base-input v-model="formState.password" />
      <label>Password</label>
    </div>
    <base-text :text="appStore.error" :theme="TextTheme.ERROR" />

    <btn @click="handleSubmit" :theme="ThemeButton.OUTLINE" :disabled="loading" class="login-btn">{{
      __('Login')
    }}</btn>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Btn from 'shared/ui/Button/Button.vue';
import useTranslate from 'shared/config/i18n/useTranslate';
import { ThemeButton } from 'shared/ui/Button/types';
import BaseInput from 'shared/ui/Input/Input.vue';
import BaseText from 'shared/ui/Text/Text.vue';
import { TextTheme } from 'shared/ui/Text/TextTypes';
import { useAppStore } from 'app/appStore/store';

const { __ } = useTranslate('Navbar');
const appStore = useAppStore();

interface Props {
  loading?: boolean;
}

interface Emits {
  (e: 'loggedIn', values): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();

const formState = reactive({
  username: '',
  password: ''
});

const handleSubmit = async () => {
  emits('loggedIn', {
    username: formState.username.trim(),
    password: formState.password
  });
};
</script>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
}

.login-btn {
  margin-top: 15px;
  margin-left: auto;
}

.input-container {
  position: relative;
  margin-bottom: 25px;
  margin-top: 25px;
}
.input-container label {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 16px;
  color: var(--primary-color);
  pointer-events: none;
  transition: all 0.5s ease-in-out;
}

.input-container input:focus ~ label,
.input-container input:valid ~ label {
  top: -12px;
  font-size: 12px;
}
</style>

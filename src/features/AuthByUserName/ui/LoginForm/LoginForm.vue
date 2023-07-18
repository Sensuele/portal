<template>
  <div class="login-form">
    <div class="input-container">
      <base-input v-model:modelValue="formState.username" />
      <label>Login</label>
    </div>
    <div class="input-container">
      <base-input v-model:modelValue="formState.password" />
      <label>Password</label>
    </div>
    <btn :theme="ThemeButton.OUTLINE" class="login-btn">{{ __('Login') }}</btn>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Btn from 'shared/ui/Button/Button.vue';
import useTranslate from 'shared/config/i18n/useTranslate';
import { ThemeButton } from 'shared/ui/Button/types';
import BaseInput from 'shared/ui/Input/Input.vue';

const { __ } = useTranslate('Navbar');

const formState = reactive({
  username: '',
  password: ''
});
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

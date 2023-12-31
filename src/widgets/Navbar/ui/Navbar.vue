<template>
  <div :class="'navbar'">
    <btn v-if="appStore.authorized" @click="appStore.reset" :theme="ThemeButton.CLEAR">{{ __('Logout') }}</btn>
    <btn v-else @click="visible = !visible" :theme="ThemeButton.CLEAR">{{ __('Login') }}</btn>
    <login-modal v-model:visible="visible" @logged-in="onLoggedIn" :loading="loading"></login-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import useTranslate from 'shared/config/i18n/useTranslate';
import Btn from 'shared/ui/Button/Button.vue';
import { ThemeButton } from 'shared/ui/Button/types';
import { useLogin } from 'features/AuthByUserName/model/slice/useLogin';
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';
import { useAppStore } from 'app/appStore/store';
import { LoginModal } from 'features/AuthByUserName';

interface Props {
  className?: string;
}

const { __ } = useTranslate('Navbar');
const props = defineProps<Props>();

const visible = ref(false);
const loading = ref(false);

const { login } = useLogin();
const appStore = useAppStore();

const onLoggedIn = async (formState: LoginSchema) => {
  loading.value = true;
  const { username, password } = formState;

  try {
    const data = await login(username, password);
    await appStore.load(data);
    visible.value = false;
    appStore.error = '';
  } catch (error) {
    if (error instanceof Error && error.message === 'Request failed with status code 403') {
      appStore.error = 'Incorrect username or password';
    } else {
      appStore.error = 'Something goes wrong';
    }
    console.log(error);
  } finally {
    loading.value = false;
  }
};
watch(visible, () => {
  appStore.error = null;
});
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: var(--navbar-height);
  background: var(--bg-color-light);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
  }
}
</style>

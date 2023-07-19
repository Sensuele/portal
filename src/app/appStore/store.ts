import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';
import { AppConfig } from './types/userConfig';

const initConfig: AppConfig = {
  id: '-1',
  username: 'Unknown'
};

export const useAppStore = defineStore('AppStore', () => {
  const loaded = ref(false);
  const authorized = ref(false);
  const config = ref<AppConfig>(initConfig);
  const error = ref();

  const load = async (authData: AppConfig) => {
    error.value = null;
    config.value.id = authData.id;
    config.value.username = authData.username;
    authorized.value = true;
  };

  const initAuthData = () => {
    const user = localStorage.getItem('user');

    if (user) {
      config.value = JSON.parse(user);
      authorized.value = true;
    }
  };

  const reset = () => {
    authorized.value = false;
    localStorage.removeItem('user');
    config.value = initConfig;
  };

  return {
    loaded: readonly(loaded),
    authorized: readonly(authorized),
    config,
    load,
    reset,
    initAuthData,
    error
  };
});

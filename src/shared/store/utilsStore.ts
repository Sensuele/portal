import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Theme } from 'types';

export const useThemeStore = defineStore('themeStore', () => {
  const LOCAL_STORAGE_THEME_KEY = 'theme';
  const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;
  const theme = ref<Theme>(defaultTheme);

  const toggleTheme = () => {
    theme.value === Theme.DARK ? (theme.value = Theme.LIGHT) : (theme.value = Theme.DARK);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme.value);
  };

  return {
    theme,
    toggleTheme
  };
});

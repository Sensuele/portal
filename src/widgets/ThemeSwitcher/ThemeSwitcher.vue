<template>
  <btn :theme="ThemeButton.CLEAR" :class="'switcher'" @click="themeStore.toggleTheme">
    <icon :icon-name="'IconDark'" />
  </btn>
</template>

<script setup lang="ts">
import Icon from 'shared/assets/Icon/Icon.vue';
import Btn from 'shared/ui/Button/Button.vue';
import { ThemeButton } from 'shared/ui/Button/types';
import { useThemeStore } from 'shared/store/utilsStore';

const themeStore = useThemeStore();
</script>

<style scoped lang="scss"></style>

<template>
  <div>
    <btn @click="toggleLang" :theme="ThemeButton.CLEAR">{{ short ? __('Lang') : __('Language') }}</btn>
  </div>
</template>

<script setup lang="ts">
import { i18n } from 'shared/config/i18n';
import { Composer } from 'vue-i18n';
import Btn from 'shared/ui/Button/Button.vue';
import { ThemeButton } from 'shared/ui/Button/types';
import useTranslate from 'shared/config/i18n/useTranslate';

export interface Props {
  theme?: ThemeButton;
  short?: boolean;
}

const props = defineProps<Props>();

const { __ } = useTranslate('LangSwitcher');

const globalI18n = i18n.global as Composer;
const toggleLang = () => {
  globalI18n.locale.value === 'ru' ? (globalI18n.locale.value = 'en') : (globalI18n.locale.value = 'ru');
};
</script>

<style scoped></style>

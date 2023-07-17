<template>
  <div :class="'navbar'">
    <btn @click="visible = !visible" :theme="ThemeButton.CLEAR">{{ __('Login') }}</btn>
    <modal v-model:visible="visible"></modal>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import useTranslate from 'shared/config/i18n/useTranslate';
import Modal from 'shared/ui/Modal/Modal.vue';
import Btn from 'shared/ui/Button/Button.vue';
import { ThemeButton } from 'shared/ui/Button/types';

interface Props {
  className?: string;
}

const { __ } = useTranslate('Navbar');
const props = defineProps<Props>();

const visible = ref(false);
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

<template>
    <btn :theme="ThemeButton.CLEAR" :class="'switcher'" @click="emits('toggleTheme')">
        <icon :icon-name="'IconDark'" />
    </btn>
    
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import Icon from 'shared/assets/icon/Icon.vue';
import Btn from 'shared/ui/Button/Button.vue'
import { ThemeButton } from 'shared/ui/Button/types';

interface Props {
  theme: string;
}

interface Emits {
  (e: 'toggleTheme'): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

</script>

<style scoped lang="scss">

</style>
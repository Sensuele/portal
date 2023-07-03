<template>
    <button :type="type" :class="[theme, 'button']">
        <span>
            <slot name="default" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes, defineProps } from 'vue';
import { ThemeButton } from './types';

interface Props extends Omit<ButtonHTMLAttributes, 'type'> {
    type: ButtonHTMLAttributes;
    theme?: ThemeButton,
}
const props = defineProps<Props>();

</script>

<style scoped lang="scss">
.button {
    cursor: pointer;
}
.clear {
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    outline: none;
}
</style>
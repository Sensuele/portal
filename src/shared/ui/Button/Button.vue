<template>
    <button :type="props.type" v-bind="$attrs" :class="[theme, 'button']">
  
      <span>
        <slot name="default" />
      </span>
    </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ThemeButton } from './types';

export interface Props {
  type?: "button" | "submit" | "reset" | undefined;
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
    color: var(--primary-color);
}
</style>
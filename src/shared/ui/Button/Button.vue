<template>
    <button v-bind="$attrs" :class="[theme, 'button']">
      <span>
        <slot name="default" />
      </span>
    </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ThemeButton } from './types';

export interface Props {
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
.outline {
  padding: 10px 15px;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 10px;
  background: none;
}
</style>
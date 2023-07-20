<template>
  <div :class="['text', theme]">
    <p v-if="title" class="title">{{ title }}</p>
    <p v-if="text" class="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { TextTheme } from './TextTypes';

interface Props {
  text?: string;
  title?: string;
  theme?: TextTheme;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.title {
  font: var(--font-l);
  color: var(--primary-color);
}

.text {
  font: var(--font-m);
  color: var(--secondary-color);
}

.error {
  .title {
    color: var(--red-light);
  }

  .text {
    color: var(--red-dark);
  }
}
</style>

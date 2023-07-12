<template>
  <div>
    <div :class="'not-found-page'">
      {{ __('Page not found') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import useTranslate from 'shared/config/i18n/useTranslate';
const { __ } = useTranslate('NotFoundPage');
</script>

<style scoped lang="scss">
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--font-l);
}
</style>

<template>
  <router-link :to="to" :class="classNames('', {}, [className ?? ''])">
    <template #default>
      <slot name="default" />
    </template>
  </router-link>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import { classNames } from 'shared/lib/classNames/classNames';
import { RouteLocationRaw } from 'vue-router';

interface Props {
  className?: string;
  to: RouteLocationRaw;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
a {
  color: var(--primary-color);
  text-decoration: none;
  margin-left: 10px;
}
</style>

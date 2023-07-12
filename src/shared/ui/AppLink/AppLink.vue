<template>
  <router-link :to="to" :class="classNames('', {}, [className ?? ''])">
    <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}"></slot>
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

<template>
  <app-link :to="path">
    <icon v-if="collapsed" :icon-name="iconName" />
    <span v-else>{{ __(text) }}</span>
  </app-link>
</template>

<script setup lang="ts">
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import useTranslate from 'shared/config/i18n/useTranslate';
import Icon from 'shared/assets/Icon/Icon.vue';
import AppLink from 'shared/ui/AppLink';

interface Props extends SidebarItemType {
  collapsed: boolean;
}
defineProps<Props>();

const { __ } = useTranslate('Sidebar');
</script>
<style scoped lang="scss">
.collapsed {
  width: var(--sidebar-width-collapsed);

  .link {
    opacity: 0;
    transition: 0.2s opacity;
    width: 0;
  }
}
</style>

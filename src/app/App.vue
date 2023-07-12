<template>
  <div :class="[classNames('app', {}, [theme])]">
    <navbar />
    <div class="content-page">
      <sidebar @toggle-theme="toggleTheme" :theme="theme" />
      <router-view class="page-wrapper" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/config/theme/useTheme';
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
const { theme, toggleTheme } = useTheme();
</script>
<style lang="scss">
.dark {
  .switcher {
    color: yellow;
  }
}
.content-page {
  display: flex;
}

.page-wrapper {
  flex-grow: 1;
  padding: 20px;
}
</style>

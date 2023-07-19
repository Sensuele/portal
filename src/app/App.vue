<template>
  <div :class="['app', themeStore.theme]">
    <navbar />
    <div class="content-page">
      <sidebar />
      <router-view class="page-wrapper" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar';
import { useThemeStore } from 'shared/store/utilsStore';
import { useAppStore } from './appStore/store';

const themeStore = useThemeStore();
const appStore = useAppStore();
appStore.initAuthData();
</script>
<style lang="scss">
.dark_theme {
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

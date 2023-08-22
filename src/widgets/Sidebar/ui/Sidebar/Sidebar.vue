<template>
  <div class="sidebar-wrap">
    <div :class="[{ collapsed }, 'sidebar']">
      <ul class="sidebar-routes">
        <li v-for="link in SidebarItemsList" :key="link.path">
          <sidebar-item v-bind="link" :collapsed="collapsed" />
        </li>
      </ul>
      <div class="switchers">
        <theme-switcher />
        <lang-switcher :class="'lang-switcher'" :short="collapsed" />
      </div>
    </div>
    <Button @click="collapsed = !collapsed" :theme="ThemeButton.BACKGROUND" class="sidebar-btn">{{
      collapsed ? '>' : '<'
    }}</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher';
import Button from 'shared/ui/Button/Button.vue';
import { ThemeButton } from 'shared/ui/Button/types';
import useTranslate from 'shared/config/i18n/useTranslate';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import SidebarItem from './SidebarItem/SidebarItem.vue';

const { __ } = useTranslate('Sidebar');
const collapsed = ref(false);
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  width: var(--sidebar-width);
  position: relative;
  background: var(--bg-color-light);
  transition: width 0.3s;

  &-wrap {
    height: calc(100vh - var(--navbar-height));
    display: flex;
    align-items: flex-end;
  }

  &-btn {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &-routes {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    list-style-type: none;

    li {
      margin-top: 10px;
    }

    a {
      margin-left: 0;
    }
  }
}

.collapsed {
  width: var(--sidebar-width-collapsed);

  .switchers {
    flex-direction: column;
    align-items: center;
  }

  .lang-switcher {
    margin-left: 0;
  }
}

.switchers {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}
.lang-switcher {
  margin-left: 10px;
}
</style>

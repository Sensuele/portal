<template>
  <div class="sidebar-wrap">
    <div  :class="[{collapsed}, 'sidebar']">
      <div class="switchers">
        <theme-switcher @toggle-theme="emits('toggleTheme')" :theme="theme" />
        <lang-switcher :class="'lang-switcher'" />
      </div>
    </div>
    <Button @click="collapsed = !collapsed" :theme="ThemeButton.BACKGROUND" class="sidebar-btn">{{ collapsed ? '>' : '<' }}</Button>
  </div>
</template>

<script setup lang="ts">
import { Transition, ref } from 'vue';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher';
import Button from 'shared/ui/Button/Button.vue';
import { ThemeButton } from 'shared/ui/Button/types';

interface Props {
  // className?: string;
  theme: string;
}

interface Emits {
  (e: 'toggleTheme'): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

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

    .link {
        opacity: 0;
        transition: 0.2s opacity;
        width: 0;
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

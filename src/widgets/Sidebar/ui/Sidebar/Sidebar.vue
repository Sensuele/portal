<template>
    <div :class="[{collapsed}, 'sidebar']">
        <div class="switchers">
            <theme-switcher @toggle-theme="emits('toggleTheme')" :theme="theme" />
            <lang-switcher :class="'lang-switcher'" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher';

interface Props {
    className?: string;
    theme: string
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
    height: calc(100vh - var(--navbar-height));
    width: var(--sidebar-width);
    position: relative;
    background: var(--bg-color-light);
}

.collapsed {
    width: var(--sidebar-width-collapsed);
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
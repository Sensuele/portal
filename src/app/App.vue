<template>
    <div :class="[classNames('app', {}, [theme])]">
        <navbar />
        <theme-switcher @toggle-theme="toggleTheme" :theme="theme" />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'shared/config/theme/useTheme'
import Navbar from 'widgets/Navbar';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
const { theme, toggleTheme } = useTheme();
</script>
<style lang="scss">

</style>
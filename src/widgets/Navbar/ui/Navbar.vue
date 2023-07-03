<template>
    <div :class="classNames('navbar', {}, [className ?? '' ])">
        <theme-switcher @toggle-theme="emits('toggleTheme')" :theme="theme" />

        <ul>
            <li v-for="route in routes" :key="route.name">
                <app-link :to="route.path">{{ route.name }}</app-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { classNames } from 'shared/lib/classNames';
import { routes } from 'shared/config/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink.vue';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import { useTheme } from 'shared/config/theme/useTheme';

interface Props {
    className?: string;
    theme: string
}

interface Emits {
  (e: 'toggleTheme'): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<style lang="scss" scoped>
    .navbar {
        width: 100%;
        height: var(--navbar-height);
        background: var(--bg-color-light);
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            padding: 0;
            list-style: none;
            display: flex;
            align-items: center;
        }

        a {
            color: var(--primary-colo);
            text-decoration: none;
            margin-left: 10px;
        }
    }
</style>
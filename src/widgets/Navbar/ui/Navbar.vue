<template>
    <div :class="classNames('navbar', {}, [className ?? '' ])">
        {{ __('Hello') }}
        <ul>
            <li v-for="route in routes" :key="route.name">
                <app-link :to="route.path">{{ __(route.name as string) }}</app-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { classNames } from 'shared/lib/classNames/classNames';
import { routes } from 'shared/config/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink.vue';
import useTranslate from 'shared/config/i18n/useTranslate'

interface Props {
    className?: string;
}

const { __ } = useTranslate('Navbar')
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
    .navbar {
        width: 100%;
        height: var(--navbar-height);
        background: var(--bg-color-light);
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        ul {
            padding: 0;
            list-style: none;
            display: flex;
            align-items: center;
        }

        a {
            color: var(--primary-color);
            text-decoration: none;
            margin-left: 10px;
        }
    }
</style>
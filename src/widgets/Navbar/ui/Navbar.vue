<template>
    <div :class="classNames('navbar', {}, [className ?? '' ])">
        <ul>
            <li>
                <app-link :to="'/'">{{ __('Home') }}</app-link>
            </li>
            <li>
                <app-link :to="'/about'">{{ __('About') }}</app-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink';
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
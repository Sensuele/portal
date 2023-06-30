<template>
    <div :class="[classNames('app', {}, [theme])]">
        <ul>
            <li v-for="route in routes" :key="route.name">
                <router-link :to="route.path">{{ route.name }}</router-link>
            </li>
        </ul>
        <button @click="toggleTheme">{{ theme }}</button>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'shared/config/theme/useTheme'
import { routes } from 'shared/config/routeConfig';
const { theme, toggleTheme} = useTheme();
</script>
<style lang="scss">

</style>
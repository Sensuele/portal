<template>
    <div :class="[classNames('app', {}, [theme])]">
        <router-link to="/about">Go to About</router-link>
        <button @click="toggleTheme">{{ theme }}</button>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { classNames } from 'helpers/classNames';
import { useTheme } from 'shared/config/theme/useTheme'

const { theme, toggleTheme} = useTheme();
</script>
<style lang="scss">

</style>
<template>
    <div :class="['app', theme]">
        <router-link to="/about">Go to About</router-link>
        <button @click="toggleTheme">{{ theme }}</button>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { useTheme } from './hooks/useTheme';

const { theme, toggleTheme} = useTheme();
</script>
<style lang="scss">

</style>
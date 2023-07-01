<template>
    <div :class="[classNames('app', {}, [theme])]">
        <navbar />
        
        <button @click="toggleTheme">{{ theme }}</button>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'shared/config/theme/useTheme'
import Navbar from 'widgets/Navbar';
const { theme, toggleTheme} = useTheme();
</script>
<style lang="scss">

</style>
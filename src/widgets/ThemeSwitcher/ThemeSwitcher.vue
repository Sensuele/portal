<template>
    <button @click="emits('toggleTheme')">{{ theme }}</button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

interface Props {
    theme: string;
}

interface Emits {
  (e: 'toggleTheme'): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

</script>

<style scoped>

</style>
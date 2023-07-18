<template>
  <input
    v-bind="$attrs"
    ref="inputRef"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
import { InputHTMLAttributes, ref } from 'vue';

export interface Props {
  modelValue: string;
}

defineProps<Props>();
const inputRef = ref();
const focus = () => {
  inputRef.value?.focus();
};
defineEmits(['update:value']);
defineExpose({ inputRef, focus });
</script>

<style scoped lang="scss"></style>

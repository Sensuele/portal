<template>
  <input v-bind="$attrs" ref="inputRef" type="text" v-model="modelValue" />
</template>

<script setup lang="ts">
import { InputHTMLAttributes, ref } from 'vue';

export interface Props {}

defineProps<Props>();
const inputRef = ref();
const focus = () => {
  inputRef.value?.focus();
};
defineExpose({ inputRef, focus });
// const modelValue = defineModel<string>();
</script>

<style lang="scss">
input {
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: var(--primary-color);
}
input:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid #e74c3c;
}
</style>

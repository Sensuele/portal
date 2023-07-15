<template>
  <div>
    <teleport :to="to">
      <div class="modal dark" v-if="visible">
        <slot name="header"></slot>
        <slot name="body" />
        <slot name="footer">
          <button class="modal-default-button" @click="$emit('close')">OK</button>
        </slot>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

interface Props {
  visible: boolean;
  to: string;
}

const props = withDefaults(defineProps<Props>(), { to: 'body' });
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  min-height: 200px;
  background-color: white;
  display: table;
  transition: opacity 0.3s ease;
  width: 600px;
  padding: 22px 24px;
  border-radius: 8px;
  box-shadow: var(--vt-shadow-2);
  margin-bottom: 1.2em;
  transition: background-color 0.5s ease;

  &.dark {
    background: var(--bg-color-light);
    color: var(--primary-color);
  }
}
</style>

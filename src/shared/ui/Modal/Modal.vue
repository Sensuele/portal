<template>
  <div>
    <teleport :to="to">
      <div :class="['modal', themeStore.theme, classNames('', {}, [className ?? ''])]" v-if="innerVisible">
        <div>
          <div class="modal__header">
            <slot name="header"></slot>
          </div>
          <div class="modal__body">
            <slot name="body" />
          </div>
          <div class="modal__footer">
            <slot name="footer">
              <!-- <button class="modal-default-button" @click="onVisibleChanged">Cancel</button>
              <button class="modal-default-button">OK</button> -->
            </slot>
          </div>
        </div>
      </div>
      <div v-if="innerVisible" :class="['modal__backdrop', themeStore.theme]" @click.prevent.stop="onVisibleChanged" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { classNames } from 'shared/lib/classNames/classNames';

import { useThemeStore } from 'shared/store/utilsStore';

const themeStore = useThemeStore();
interface Props {
  visible: boolean;
  to?: string;
  className?: string;
}

interface Emits {
  (e: 'update:visible', value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), { to: 'body' });
const emit = defineEmits<Emits>();

const innerVisible = ref<boolean>();

const onVisibleChanged = () => {
  innerVisible.value = false;
  emit('update:visible', false);
};

watch(
  () => props.visible,
  () => (innerVisible.value = props.visible),
  { immediate: true }
);
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  min-height: 100px;
  background-color: white;
  display: table;
  transition: opacity 0.3s ease;
  width: 480px;
  padding: 22px 24px;
  border-radius: 8px;
  box-shadow: var(--vt-shadow-2);
  margin-bottom: 1.2em;
  transition: background-color 0.5s ease;

  &.dark_theme {
    background: var(--bg-color-light);
    color: var(--primary-color);
  }

  &__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1049;
    opacity: 0.6;
    background: var(--backdrop-color);
    cursor: default;
  }
}
</style>

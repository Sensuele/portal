<template>
  <component :is="iconName" v-bind="$attrs" />
</template>

<script lang="ts">
import IconLight from './icons/IconLight.vue';
import IconDark from './icons/IconDark.vue';

interface Props {
  iconName: string;
}

export default {
  components: {
    IconDark,
    IconLight
  },
  props: {
    iconName: String
  }
};
</script>

<template>
  <component :is="iconName" v-bind="$attrs" />
</template>

<script lang="ts">
import IconLight from './icons/IconLight.vue';
import IconDark from './icons/IconDark.vue';
import Main from './icons/Main.vue';
import AboutIcon from './icons/AboutIcon.vue';

interface Props {
  iconName: string;
}

export default {
  components: {
    IconDark,
    IconLight,
    Main,
    AboutIcon
  },
  props: {
    iconName: String
  }
};
</script>

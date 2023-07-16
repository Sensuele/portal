<template>
  <component :is="iconName" v-bind="$attrs" />
</template>

<script lang="ts">
import IconLight from './icons/IconLight.vue';
import IconDark from './icons/IconDark.vue';
import MainIcon from './icons/Main.vue';
import AboutIcon from './icons/AboutIcon.vue';

interface Props {
  iconName: string;
}

export default {
  components: {
    IconDark,
    IconLight,
    MainIcon,
    AboutIcon
  },
  props: {
    iconName: String
  }
};
</script>

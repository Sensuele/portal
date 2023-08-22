<template>
  <component :is="iconName" v-bind="$attrs" />
</template>

<script lang="ts">
import IconLight from './icons/IconLight.vue';
import IconDark from './icons/IconDark.vue';
import MainIcon from './icons/Main.vue';
import AboutIcon from './icons/AboutIcon.vue';
import ProfileIcon from './icons/ProfileIcon.vue';

interface Props {
  iconName: string;
}

export default {
  components: {
    IconDark,
    IconLight,
    MainIcon,
    AboutIcon,
    ProfileIcon
  },
  props: {
    iconName: String
  }
};
</script>

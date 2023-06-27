/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export type Props = unknown;
  export default component;
}

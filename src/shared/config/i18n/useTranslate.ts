import { onBeforeMount, watch, ref, readonly } from 'vue';
import { useI18n } from 'vue-i18n';
import { loadLocaleMessages, setLangAttribute, SUPPORTED_LOCALES } from './';
import { ComponentName } from './i18n.types';

/**
 *
 * @param groupName По-умолчанию определяется по имени компонента.
 * Если у компонента есть дочерние компоненты, то рекомендуется использовать имя родительского.
 */
export default function useTranslate(groupName: ComponentName) {
  const i18n = useI18n();
  const loaded = ref(false);

  const setComponentMessages = async (newLocal: string) => {
    if (!SUPPORTED_LOCALES.includes(newLocal)) {
      console?.error(`Locale ${newLocal} not support.`);
      return;
    }

    if (!i18n.messages.value[newLocal]?.[groupName]) {
      const componentMessages = (await loadLocaleMessages(newLocal, groupName)) ?? {};
      i18n.mergeLocaleMessage(newLocal, { [groupName]: componentMessages });
    }

    setLangAttribute(newLocal);
  };

  onBeforeMount(async () => {
    await setComponentMessages(i18n.fallbackLocale.value as string);
  });

  watch(
    i18n.locale,
    async (newLocal) => {
      await setComponentMessages(newLocal);
      loaded.value = true;
    },
    { immediate: true }
  );

  return {
    __: (key: string, plural?: number) => {
      if (!loaded.value) {
        return key;
      }

      const fullKeyPath = `${groupName}.${key}`;

      return i18n.te(fullKeyPath) ? i18n.t(fullKeyPath, plural as any) : i18n.t(key);
    },
    loaded: readonly(loaded)
  };
}

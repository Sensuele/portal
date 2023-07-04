import { createI18n } from 'vue-i18n';
import type { I18n, I18nOptions, Composer } from 'vue-i18n';
import { MessagesMap, LocaleValue } from './i18n.types';

export function setLangAttribute(locale: string) {
  const html = document.querySelector<HTMLElement>('html');
  html?.setAttribute('lang', locale);
}

export const SUPPORTED_LOCALES: LocaleValue[] = ['en', 'ru'];

export function setupI18n(options: I18nOptions = { locale: 'en' }): I18n {
  const i18n = createI18n(options) as I18n;

  setI18nLang(i18n, options.locale!);

  return i18n;
}

export function setI18nLang(i18n: I18n, locale: string): void {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    (i18n.global as Composer).locale.value = locale;
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */

  setLangAttribute(locale);
}

export async function loadLocaleMessages(locale: LocaleValue, componentName: string) {
  const translationFilePath = `./${locale}/${componentName}.ts`;

  let messages: MessagesMap | undefined;
  try {
    const data = await import(`./${locale}/${componentName}.ts`);
    messages = data.default;
  } catch (e) {
    console.error(`Not found translation file ${translationFilePath}`, e as Error);
  }

  return messages;
}

function pluralCustomRule(choice: number, choicesLength: number) {
  if (choice < 1) {
    return 0;
  }

  const rem10 = choice % 10;
  const isSecondDecade = choice > 10 && choice < 20;

  if (!isSecondDecade) {
    if (rem10 === 1) {
      return 1;
    }

    if (rem10 >= 2 && rem10 <= 4) {
      return 2;
    }
  }

  return choicesLength < 4 ? 2 : 3;
}

export const i18n = setupI18n({
    legacy: false,
    locale: SUPPORTED_LOCALES.includes(navigator.language) ? navigator.language : 'en',
    pluralRules: { ru: pluralCustomRule },
    fallbackLocale: 'en'
  });

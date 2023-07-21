## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run test:unit` - Хапуск unit тестов с jest
- `npm run test:ui` - Хапуск скриншотных тестов с loki
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.

Документация i18next - [https://vue-i18n.intlify.dev/](https://vue-i18n.intlify.dev/)

----


## Линтинг

В проекте используется eslint для проверки typescript кода.


##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.ts

Запустить сторибук можно командой:
- `npm run storybook`


----


## CI pipeline

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.


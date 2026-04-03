# Troubleshooting Guide

## Проблема: 404 ошибка после деплоя

### Причина 1: Неправильный base URL

**Решение:**
1. Откройте `vite.config.ts`
2. Убедитесь что `base` соответствует вашему типу GitHub Pages:
   - User/Org Pages (`username.github.io`): `base: '/'`
   - Project Pages (`username.github.io/repo-name`): `base: '/repo-name/'`
3. Закоммитьте и запушьте изменения

### Причина 2: GitHub Pages не настроен на GitHub Actions

**Решение:**
1. Откройте Settings → Pages вашего репозитория
2. В "Build and deployment" → "Source" выберите **GitHub Actions**
3. Дождитесь завершения деплоя во вкладке Actions

### Причина 3: Репозиторий приватный (требуется GitHub Pro)

**Решение:**
1. Откройте Settings вашего репозитория
2. Внизу страницы в разделе "Danger Zone" нажмите "Change visibility"
3. Сделайте репозиторий Public

## Проблема: GitHub Actions workflow не запускается

**Решение:**
1. Убедитесь что файл `.github/workflows/deploy.yml` существует
2. Проверьте что вы пушите в ветку `main`
3. Проверьте что GitHub Actions включены:
   - Settings → Actions → General
   - Убедитесь что "Allow all actions and reusable workflows" включено

## Проблема: Сборка падает с ошибкой

**Проверьте во вкладке Actions конкретную ошибку:**

### Ошибка: "pnpm: command not found"

Убедитесь что в `.github/workflows/deploy.yml` есть шаг установки pnpm:
```yaml
- name: Install pnpm
  uses: pnpm/action-setup@v3
  with:
    version: 8
```

### Ошибка: Build failed

1. Попробуйте собрать локально: `pnpm run build`
2. Исправьте ошибки в коде
3. Запушьте исправления

## Проблема: CSS/JS файлы не загружаются

**Причина:** Скорее всего неправильный `base` в `vite.config.ts`

**Решение:**
1. Откройте DevTools (F12) → Network
2. Посмотрите какие файлы не загружаются
3. Если путь выглядит как `/assets/...` но должен быть `/repo-name/assets/...`
   - Измените `base: '/repo-name/'` в `vite.config.ts`
4. Если наоборот - измените на `base: '/'`

## Проблема: Изменения не отображаются

**Решение:**
1. Очистите кеш браузера (Ctrl+Shift+R или Cmd+Shift+R)
2. Проверьте что деплой завершился успешно (Actions → последний workflow)
3. Подождите 5-10 минут (GitHub Pages кеширует контент)

## Проблема: Анимации не работают

**Проверьте:**
1. Откройте DevTools → Console
2. Если есть ошибки импорта `motion` - проверьте что пакет установлен:
   ```bash
   pnpm list motion
   ```
3. Если не установлен: `pnpm install motion`

## Нужна помощь?

1. Проверьте логи во вкладке Actions
2. Откройте DevTools (F12) и посмотрите Console и Network
3. Убедитесь что следовали всем шагам из README.md

## Полезные команды для отладки

```bash
# Локальная сборка (проверить что билд работает)
pnpm run build

# Превью продакшен билда локально
pnpm run preview

# Очистка и пересборка
rm -rf dist node_modules
pnpm install
pnpm run build
```

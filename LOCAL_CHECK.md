# Локальная проверка перед деплоем

Перед тем как деплоить на GitHub Pages, убедитесь что всё работает локально.

## 1. Установка зависимостей

```bash
pnpm install
```

Должны установиться все пакеты без ошибок.

## 2. Запуск dev сервера

```bash
pnpm run dev
```

Ожидаемый результат:
```
VITE v6.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Откройте http://localhost:5173/ в браузере.

## 3. Проверка что работает:

### ✅ Визуальная проверка
- [ ] Сайт открывается без ошибок
- [ ] Навигация отображается сверху
- [ ] Hero секция с заголовком и текстом
- [ ] Секция Products с карточками
- [ ] Секция About (история бренда)
- [ ] Секция Experience
- [ ] Секция Ingredients
- [ ] Footer внизу страницы

### ✅ Анимации
- [ ] При скролле элементы плавно появляются
- [ ] Hover эффекты на кнопках работают
- [ ] Параллакс эффекты работают

### ✅ Изображения
- [ ] Все изображения загружаются
- [ ] Нет битых изображений (иконка 🖼️)

### ✅ Консоль (F12)
- [ ] Нет красных ошибок в Console
- [ ] Все файлы загружаются (Network tab)

## 4. Сборка для продакшена

```bash
pnpm run build
```

Ожидаемый результат:
```
vite v6.x.x building for production...
✓ XXX modules transformed.
dist/index.html                  X.XX kB │ gzip: X.XX kB
dist/assets/index-XXXXX.css      XX.XX kB │ gzip: XX.XX kB
dist/assets/index-XXXXX.js       XXX.XX kB │ gzip: XXX.XX kB
✓ built in XXXs
```

Папка `dist/` должна быть создана.

## 5. Превью продакшен билда

```bash
pnpm run preview
```

Откройте http://localhost:4173/ и проверьте что сайт работает так же как в dev режиме.

## 6. Проверка структуры dist/

```bash
ls -la dist/
```

Должны быть:
- `index.html`
- `assets/` (папка с CSS и JS файлами)
- возможно изображения

## ⚠️ Распространенные проблемы

### Ошибка: "Cannot find module"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Ошибка: "Port 5173 is already in use"
Закройте другой процесс или используйте другой порт:
```bash
pnpm run dev -- --port 3000
```

### Пустой экран в браузере
1. Откройте DevTools (F12)
2. Посмотрите Console на ошибки
3. Проверьте Network tab - загружаются ли файлы

### Анимации не работают
Проверьте что motion установлен:
```bash
pnpm list motion
```

Если нет:
```bash
pnpm install motion
```

## ✅ Готово к деплою!

Если все проверки прошли успешно, можете деплоить на GitHub Pages!

Следуйте инструкциям в [QUICKSTART.md](./QUICKSTART.md)

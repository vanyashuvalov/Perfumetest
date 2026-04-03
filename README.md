# Essence Parfumerie

Премиум лендинг для сайта парфюмерии в стиле Awwwards с красивыми анимациями.

![Essence Parfumerie Preview](https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=630&fit=crop)

> 📖 **[Quick Start Guide](./QUICKSTART.md)** - Быстрая настройка за 5 минут
> 
> ⚠️ **[Troubleshooting](./TROUBLESHOOTING.md)** - Решение проблем

## 🚀 Быстрый старт (Локальная разработка)

```bash
# Установите зависимости
pnpm install

# Запустите dev сервер
pnpm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## 📦 Деплой на GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на [GitHub](https://github.com/new)
2. Создайте новый public репозиторий (например, `parfumerie-landing`)
3. **НЕ** инициализируйте с README, .gitignore или лицензией

### Шаг 2: Загрузите код

```bash
# Инициализируйте git (если еще не сделали)
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: Essence Parfumerie landing"

# Добавьте remote (замените YOUR_USERNAME и YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Загрузите код
git branch -M main
git push -u origin main
```

### Шаг 3: Настройте GitHub Pages

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** (вкладка в верхней части страницы)
3. В боковом меню найдите и кликните **Pages**
4. В разделе **"Build and deployment"**:
   - **Source**: выберите **GitHub Actions** из выпадающего списка
   - Сохранение произойдет автоматически

### Шаг 4: Настройте base URL

**ВАЖНО!** Откройте файл `vite.config.ts` и измените `base`:

**Вариант 1: Для User/Organization Pages** (если репозиторий называется `username.github.io`):
```typescript
base: '/'  // Оставьте как есть
```

**Вариант 2: Для Project Pages** (если репозиторий называется по-другому, например `parfumerie-landing`):
```typescript
base: '/parfumerie-landing/'  // Замените на имя ВАШЕГО репозитория
```

После изменения:
```bash
git add vite.config.ts
git commit -m "Update base URL for GitHub Pages"
git push
```

### Шаг 5: Дождитесь деплоя

1. Перейдите во вкладку **Actions** вашего репозитория
2. Дождитесь завершения workflow "Deploy static content to Pages" (обычно 2-3 минуты)
3. Зеленая галочка ✅ означает успешный деплой

### Ваш сайт будет доступен:

- **User/Organization Pages**: `https://username.github.io/`
- **Project Pages**: `https://username.github.io/repo-name/`

Ссылка также отобразится в Settings → Pages после успешного деплоя.

## 🛠 Команды для разработки

```bash
# Запуск dev сервера
pnpm run dev

# Сборка для продакшена
pnpm run build

# Превью продакшен билда
pnpm run preview
```

## ✨ Особенности

- Премиум дизайн с золотыми акцентами
- Минималистичная черно-белая цветовая схема
- Анимации на Motion (Framer Motion)
- Параллакс эффекты
- Адаптивный дизайн
- Оптимизирован для GitHub Pages
- SEO-friendly

## 📦 Структура проекта

```
/
├── src/
│   ├── app/
│   │   ├── components/    # React компоненты
│   │   └── App.tsx        # Главный компонент
│   ├── styles/            # Стили
│   └── main.tsx           # Точка входа
├── public/                # Статические файлы
└── dist/                  # Сборка (генерируется)
```

## 🎨 Компоненты

- **Hero** - Героическая секция с параллакс эффектом
- **Products** - Коллекция продуктов
- **About** - История бренда
- **Ingredients** - Ингредиенты
- **Experience** - Опыт
- **Footer** - Подвал сайта
- **Navigation** - Навигация

## 📝 Лицензия

MIT
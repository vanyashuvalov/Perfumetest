# ⚡ Quick Start Guide

> 💡 **Совет**: Перед деплоем проверьте что всё работает локально → [LOCAL_CHECK.md](./LOCAL_CHECK.md)

## Локальная разработка (3 команды)

```bash
pnpm install    # Установить зависимости
pnpm run dev    # Запустить сервер
```

Откройте http://localhost:5173

## GitHub Pages деплой (5 шагов)

### 1. Создайте репозиторий
[github.com/new](https://github.com/new) → Public → Create

### 2. Загрузите код
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ВАШ_USERNAME/ВАШ_РЕПО.git
git push -u origin main
```

### 3. Настройте base URL
Откройте `vite.config.ts`:

**Project Pages** (repo-name):
```typescript
base: '/repo-name/'  // Замените на ИМЯ вашего репо
```

**User Pages** (username.github.io):
```typescript
base: '/'  // Оставьте как есть
```

### 4. Настройте GitHub Pages
Settings → Pages → Source → **GitHub Actions**

### 5. Запушьте изменения
```bash
git add vite.config.ts
git commit -m "Update base URL"
git push
```

## Готово! 🎉

Ваш сайт: `https://username.github.io/repo-name/`

Проверьте статус: Actions → Deploy static content to Pages

---

**Проблемы?** Смотрите [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
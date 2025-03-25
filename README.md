# Веб-интерфейс для бота предсказаний

Современный веб-интерфейс для бота предсказаний, построенный с использованием Next.js, React и Tailwind CSS.

## Возможности

- Современный и отзывчивый дизайн
- Интеграция с ботом предсказаний
- Адаптивный интерфейс для мобильных устройств
- Аналитика и статистика предсказаний
- Система тарифов и оплаты

## Технологии

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Headless UI
- Hero Icons

## Установка

1. Клонируйте репозиторий:
```bash
git clone [url-репозитория]
```

2. Установите зависимости:
```bash
cd web
npm install
```

3. Создайте файл `.env.local` и добавьте необходимые переменные окружения:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Запустите проект в режиме разработки:
```bash
npm run dev
```

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Разработка

- `npm run dev` - запуск в режиме разработки
- `npm run build` - сборка проекта
- `npm run start` - запуск собранного проекта
- `npm run lint` - проверка кода линтером

## Структура проекта

```
web/
├── components/     # React компоненты
├── pages/         # Страницы и API endpoints
├── public/        # Статические файлы
├── styles/        # Глобальные стили
└── types/         # TypeScript типы
```

## Лицензия

MIT 
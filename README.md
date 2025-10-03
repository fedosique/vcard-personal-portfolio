# vCard Portfolio - Next.js 14 + FSD

Современное персональное портфолио, построенное на Next.js 14 с архитектурой Feature-Sliced Design (FSD).

## 🚀 Технологии

- **Next.js 14** - App Router, Server Components, TypeScript
- **Feature-Sliced Design** - Масштабируемая архитектура
- **TanStack Query** - Управление состоянием сервера
- **TailwindCSS** - Утилитарные стили
- **Framer Motion** - Анимации
- **React Hook Form + Zod** - Формы и валидация
- **Vitest** - Тестирование
- **ESLint + Prettier** - Качество кода

## 📁 Структура проекта (FSD)

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Корневой layout
│   ├── page.tsx           # Главная страница
│   ├── providers.tsx      # Провайдеры
│   └── resume/page.tsx    # Страница резюме
├── processes/             # Бизнес-процессы
│   └── loaders/           # SSR загрузчики данных
├── pages/                 # Страницы (роутинг)
├── widgets/               # Крупные UI блоки
│   ├── sidebar/          # Боковая панель
│   ├── about/            # Секция "О себе"
│   └── resume/           # Секция резюме
├── features/             # Функциональности
│   ├── navigation/       # Навигация
│   ├── contact/          # Контактная форма
│   └── project-filter/   # Фильтр проектов
├── entities/             # Бизнес-сущности
│   ├── user/            # Пользователь
│   ├── project/         # Проект
│   └── testimonial/     # Отзыв
└── shared/              # Переиспользуемые ресурсы
    ├── api/             # API слой
    ├── ui/              # UI компоненты
    ├── lib/             # Утилиты
    └── styles/          # Стили
```

## 🛠 Установка и запуск

### Предварительные требования

- Node.js 18+
- npm или yarn

### Установка

```bash
# Клонирование репозитория
git clone <repository-url>
cd vcard-personal-portfolio

# Установка зависимостей
npm install

# Настройка переменных окружения
cp .env.example .env.local
```

### Разработка

```bash
# Запуск dev сервера
npm run dev

# Проверка типов
npm run type-check

# Линтинг
npm run lint

# Тесты
npm run test
```

### Сборка

```bash
# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm run start
```

## 🔧 Конфигурация

### Переменные окружения

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8080/api

# Environment
NODE_ENV=development
```

### API Integration

Проект подготовлен для интеграции с Go backend:

- API endpoints в `shared/api/endpoints.ts`
- Типы данных в `shared/api/types.ts`
- Mock данные в `shared/api/mock-data.ts`
- TanStack Query для кеширования

## 📱 Адаптивность

- Mobile-first подход
- Breakpoints: 450px, 580px, 768px, 1024px, 1250px
- Responsive grid система
- Оптимизированные изображения

## 🎨 Дизайн система

### Цвета

- **Основные**: smoky-black, eerie-black, jet, onyx
- **Акценты**: orange-yellow-crayola, vegas-gold
- **Текст**: white-1, white-2, light-gray

### Типографика

- **Шрифт**: Poppins (300, 400, 500, 600)
- **Размеры**: fs-1 (24px) до fs-8 (11px)

### Компоненты

- Button (variants: default, outline, ghost, gradient)
- Input, Textarea
- Typography (h1-h5, body, caption, link)
- Card, Container
- Настраиваемые через class-variance-authority

## 🧪 Тестирование

```bash
# Запуск тестов
npm run test

# Тесты с UI
npm run test:ui

# Покрытие кода
npm run test:coverage
```

## 🐳 Docker

```bash
# Сборка образа
docker build -t vcard-portfolio .

# Запуск контейнера
docker run -p 3000:3000 vcard-portfolio
```

## 🚀 Деплой

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Деплой автоматический при push

### Другие платформы

- **Netlify**: Поддержка Next.js из коробки
- **Railway**: Простой деплой через GitHub
- **Docker**: Используйте Dockerfile для любого хостинга

## 📈 Производительность

- **SSR** по умолчанию для всех страниц
- **Image optimization** через Next.js Image
- **Code splitting** автоматический
- **Caching** через TanStack Query
- **Bundle analysis** доступен

## 🔄 Миграция с HTML

### Пошаговый план

1. **Анализ структуры** - разбить index.html на логические блоки
2. **Создание entities** - User, Project, Testimonial, etc.
3. **Создание features** - Navigation, Contact Form, Project Filter
4. **Создание widgets** - Sidebar, About Section, Resume Section
5. **Создание pages** - About, Resume, Portfolio, Blog, Contact
6. **Интеграция API** - замена статических данных на динамические
7. **Тестирование** - проверка функциональности

### Преимущества миграции

- ✅ **SSR** - лучший SEO и производительность
- ✅ **Типизация** - меньше ошибок, лучший DX
- ✅ **Масштабируемость** - легко добавлять новые функции
- ✅ **Переиспользование** - компоненты можно использовать везде
- ✅ **Тестирование** - покрытие тестами
- ✅ **CI/CD** - автоматический деплой

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License.

## 📞 Поддержка

Если у вас есть вопросы или предложения, создайте issue в репозитории.

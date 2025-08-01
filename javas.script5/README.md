# 🚗 АвтоЗапчастини - Інтернет-магазин

Сучасний веб-сайт для продажу автозапчастин з використанням JavaScript фреймворків та сучасних технологій.

## 📋 Опис проекту

Це повноцінний інтернет-магазин автозапчастин, який включає:
- **10 сторінок** з повною функціональністю
- **Сучасний дизайн** з Bootstrap 5
- **Адаптивний інтерфейс** для всіх пристроїв
- **JavaScript функціональність** для інтерактивності
- **Локальне зберігання даних** (localStorage)

## 🛠️ Використані технології

### Frontend фреймворки:
- **Bootstrap 5** - для стилізації та компонентів
- **Font Awesome** - для іконок
- **Animate.css** - для анімацій
- **Vanilla JavaScript** - для функціональності

### Основні функції:
- Каталог товарів з фільтрами
- Кошик покупок
- Система реєстрації та входу
- Пошук товарів
- Управління брендами
- Адаптивний дизайн

## 📁 Структура проекту

```
javas.script5/
├── index.html          # Головна сторінка
├── catalog.html        # Каталог товарів
├── cart.html          # Кошик покупок
├── brands.html        # Сторінка брендів
├── search.html        # Розширений пошук
├── login.html         # Сторінка входу
├── register.html      # Сторінка реєстрації
├── css/
│   └── style.css      # Кастомні стилі
├── js/
│   └── main.js        # Основна JavaScript логіка
└── README.md          # Документація
```

## 🚀 Як запустити

### Варіант 1: Простий запуск
1. Відкрийте файл `index.html` у браузері
2. Сайт готовий до використання!

### Варіант 2: Локальний сервер (рекомендовано)
```bash
# Перейдіть до папки проекту
cd javas.script5

# Запустіть Python сервер
python -m http.server 8000

# Відкрийте браузер і перейдіть на
http://localhost:8000
```

### Варіант 3: Live Server (VS Code)
1. Відкрийте проект у VS Code
2. Встановіть розширення "Live Server"
3. Натисніть "Go Live" у нижньому правому куті

## 📱 Сторінки сайту

### 1. **Головна сторінка** (`index.html`)
- Привітання та опис магазину
- Популярні категорії
- Переваги магазину
- Контактна інформація

### 2. **Каталог** (`catalog.html`)
- Список всіх товарів
- Фільтри за категоріями, брендами, ціною
- Сортування товарів
- Пагінація

### 3. **Кошик** (`cart.html`)
- Перегляд доданих товарів
- Зміна кількості
- Підсумок замовлення
- Оформлення покупки

### 4. **Бренди** (`brands.html`)
- Список популярних брендів
- Інформація про кожен бренд
- Перехід до товарів бренду

### 5. **Пошук** (`search.html`)
- Розширений пошук
- Фільтри за маркою автомобіля
- Результати пошуку
- Популярні запити

### 6. **Вхід** (`login.html`)
- Форма входу
- Соціальна авторизація
- Запам'ятовування користувача

### 7. **Реєстрація** (`register.html`)
- Форма реєстрації
- Валідація даних
- Підтвердження пароля

## 🎨 Особливості дизайну

### Кольорова схема:
- **Основний колір**: #007bff (синій)
- **Успіх**: #28a745 (зелений)
- **Попередження**: #ffc107 (жовтий)
- **Небезпека**: #dc3545 (червоний)

### Анімації:
- Плавні переходи між сторінками
- Hover ефекти на картках товарів
- Анімації завантаження
- Toast повідомлення

### Адаптивність:
- Мобільні пристрої (до 768px)
- Планшети (768px - 992px)
- Десктопи (понад 992px)

## 🔧 Функціональність

### Кошик покупок:
- Додавання/видалення товарів
- Зміна кількості
- Збереження в localStorage
- Підсумок замовлення

### Пошук та фільтри:
- Пошук за назвою товару
- Фільтри за категоріями
- Фільтри за брендами
- Фільтр за ціною
- Сортування результатів

### Користувацька система:
- Реєстрація нових користувачів
- Вхід в систему
- Збереження сесії
- Валідація форм

## 📊 Дані та зберігання

### Локальне зберігання:
- **cart** - кошик покупок
- **currentUser** - поточний користувач
- **registeredUsers** - зареєстровані користувачі

### Приклад товару:
```javascript
{
    id: 1,
    name: "Тормозні колодки Brembo",
    category: "brakes",
    brand: "Brembo",
    price: 2500,
    originalPrice: 3000,
    image: "url_to_image",
    rating: 4.8,
    stock: 15,
    description: "Високоякісні тормозні колодки"
}
```

## 🎯 Основні функції JavaScript

### Клас AutoPartsStore:
- Управління кошиком
- Пошук товарів
- Фільтрація
- Валідація форм
- Toast повідомлення

### Методи:
- `addToCart(productId)` - додати в кошик
- `removeFromCart(productId)` - видалити з кошика
- `handleSearch(query)` - пошук товарів
- `showToast(message, type)` - показ повідомлень

## 🔒 Безпека

### Валідація форм:
- Перевірка email формату
- Мінімальна довжина пароля
- Підтвердження пароля
- Обов'язкові поля

### Захист даних:
- Локальне зберігання
- Валідація на клієнтській стороні
- Безпечні форми

## 📱 Адаптивність

### Breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

### Особливості:
- Гнучка сітка Bootstrap
- Адаптивні зображення
- Мобільне меню
- Оптимізовані форми

## 🚀 Розширення функціональності

### Можливі покращення:
1. **Backend інтеграція** - підключення до сервера
2. **База даних** - зберігання товарів та користувачів
3. **Платежі** - інтеграція платіжних систем
4. **Адмін панель** - управління товарами
5. **API** - REST API для мобільних додатків

## 📞 Підтримка

### Контакти:
- **Email**: info@autoparts.ua
- **Телефон**: +380 XX XXX XX XX
- **Адреса**: Україна, Київ

### Соціальні мережі:
- Facebook
- Instagram
- Telegram

## 📄 Ліцензія

Цей проект створено для навчальних цілей. Всі права захищені.

---

**Автор**: Розробник веб-додатків  
**Версія**: 1.0.0  
**Дата**: 2024 
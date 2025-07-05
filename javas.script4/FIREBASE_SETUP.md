# 🔥 Налаштування Firebase для ChatApp

## 📋 Покрокова інструкція

### Крок 1: Створення Firebase проекту

1. **Перейдіть до Firebase Console**
   - Відкрийте [Firebase Console](https://console.firebase.google.com/)
   - Увійдіть з Google акаунтом

2. **Створіть новий проект**
   - Натисніть "Create a project" або "Створити проект"
   - Введіть назву проекту (наприклад, "chatapp-2024")
   - Виберіть чи увімкнути Google Analytics (рекомендується)
   - Натисніть "Create project"

3. **Налаштуйте проект**
   - Дочекайтеся створення проекту
   - Натисніть "Continue"

### Крок 2: Налаштування Authentication

1. **Увімкніть Authentication**
   - У меню зліва виберіть "Authentication"
   - Натисніть "Get started"

2. **Налаштуйте метод входу**
   - Перейдіть на вкладку "Sign-in method"
   - Знайдіть "Email/Password" та натисніть на нього
   - Увімкніть "Email/Password"
   - Натисніть "Save"

3. **Додаткові налаштування (опціонально)**
   - Можете додати інші методи входу (Google, Facebook, тощо)
   - Налаштуйте шаблони email для підтвердження

### Крок 3: Створення Firestore Database

1. **Створіть базу даних**
   - У меню зліва виберіть "Firestore Database"
   - Натисніть "Create database"

2. **Виберіть режим безпеки**
   - Виберіть "Start in test mode" для початкового тестування
   - Натисніть "Next"

3. **Виберіть локацію**
   - Виберіть найближчу до вас локацію (наприклад, europe-west3)
   - Натисніть "Done"

### Крок 4: Налаштування Firestore Rules

1. **Перейдіть до Rules**
   - У Firestore Database натисніть вкладку "Rules"

2. **Замініть правила на наступні:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Messages collection
    match /messages/{messageId} {
      allow read, write: if request.auth != null;
    }
    
    // Typing collection
    match /typing/{typingId} {
      allow read, write: if request.auth != null;
    }
    
    // Notifications collection
    match /notifications/{notificationId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. **Збережіть правила**
   - Натисніть "Publish"

### Крок 5: Отримання конфігурації

1. **Перейдіть до налаштувань проекту**
   - Натисніть на іконку шестерні біля "Project Overview"
   - Виберіть "Project settings"

2. **Знайдіть конфігурацію**
   - Прокрутіть до розділу "Your apps"
   - Натисніть іконку веб-додатку (</>) або "Add app" → "Web"

3. **Створіть веб-додаток**
   - Введіть назву додатку (наприклад, "ChatApp Web")
   - Можете увімкнути Firebase Hosting
   - Натисніть "Register app"

4. **Скопіюйте конфігурацію**
   - Скопіюйте об'єкт `firebaseConfig`
   - Він виглядає приблизно так:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef..."
};
```

### Крок 6: Вставка конфігурації в код

1. **Відкрийте файли**
   - Відкрийте `script.js`
   - Відкрийте `chat.js`

2. **Замініть конфігурацію**
   - Знайдіть `firebaseConfig` на початку файлів
   - Замініть на вашу конфігурацію

3. **Збережіть файли**

### Крок 7: Тестування

1. **Відкрийте додаток**
   - Відкрийте `index.html` у браузері

2. **Створіть тестовий акаунт**
   - Зареєструйтеся з тестовими даними
   - Перевірте чи створюється користувач

3. **Перевірте Firestore**
   - У Firebase Console перейдіть до Firestore
   - Перевірте чи створилися колекції `users` та `messages`

## 🔧 Додаткові налаштування

### Налаштування домену (для продакшену)

1. **У Authentication**
   - Перейдіть до "Settings" → "Authorized domains"
   - Додайте ваш домен

2. **У Firestore Rules**
   - Налаштуйте більш строгі правила для продакшену

### Моніторинг та аналітика

1. **Firebase Analytics**
   - Увімкніть для відстеження використання

2. **Firebase Performance**
   - Моніторинг продуктивності

3. **Firebase Crashlytics**
   - Відстеження помилок

## 🐛 Вирішення поширених проблем

### Проблема: "Firebase App named '[DEFAULT]' already exists"
**Рішення:**
- Перевірте чи не ініціалізується Firebase двічі
- Використовуйте `firebase.apps.length` для перевірки

### Проблема: "Permission denied" в Firestore
**Рішення:**
- Перевірте Firestore Rules
- Переконайтеся що користувач авторизований
- Перевірте структуру даних

### Проблема: Authentication не працює
**Рішення:**
- Перевірте чи увімкнено Email/Password
- Перевірте конфігурацію Firebase
- Перевірте консоль браузера на помилки

### Проблема: Повідомлення не з'являються в реальному часі
**Рішення:**
- Перевірте підключення до інтернету
- Перевірте Firestore Rules для messages
- Перевірте чи правильно налаштовані listeners

## 📊 Структура бази даних

### Колекція `users`:
```javascript
{
  username: "string",
  email: "string",
  createdAt: "timestamp",
  lastSeen: "timestamp",
  isOnline: "boolean"
}
```

### Колекція `messages`:
```javascript
{
  text: "string",
  userId: "string",
  username: "string",
  timestamp: "timestamp",
  type: "string"
}
```

### Колекція `typing`:
```javascript
{
  userId: "string",
  username: "string",
  timestamp: "timestamp"
}
```

### Колекція `notifications`:
```javascript
{
  userId: "string",
  fromUserId: "string",
  fromUsername: "string",
  message: "string",
  timestamp: "timestamp",
  read: "boolean"
}
```

## 🔒 Безпека

### Рекомендації:
- Регулярно оновлюйте Firestore Rules
- Використовуйте HTTPS в продакшені
- Обмежуйте доступ до даних
- Моніторте використання ресурсів

### Ліміти Firebase (безкоштовний план):
- 50,000 читання/день
- 20,000 записування/день
- 1GB зберігання
- 10GB передачі даних/місяць

## 📞 Підтримка

Якщо виникли проблеми:
1. Перевірте [Firebase Documentation](https://firebase.google.com/docs)
2. Перевірте [Firebase Console](https://console.firebase.google.com/)
3. Перевірте консоль браузера
4. Перевірте мережеві запити в DevTools 
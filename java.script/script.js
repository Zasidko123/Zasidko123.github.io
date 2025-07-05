// Глобальні змінні
let currentPage = 'home';
let isAnimating = false;

// DOM елементи
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setupScrollAnimations();
});

// Основна функція ініціалізації
function initializeApp() {
    // Показуємо головну сторінку за замовчуванням
    showPage('home');
    
    // Додаємо активний клас до першого посилання в навігації
    navLinks[0].classList.add('active');
    
    // Перевіряємо хеш в URL
    const hash = window.location.hash.slice(1);
    if (hash && ['home', 'services', 'about', 'contact'].includes(hash)) {
        showPage(hash);
        updateActiveNavLink(hash);
    }
}

// Налаштування обробників подій
function setupEventListeners() {
    // Навігаційні посилання
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page && !isAnimating) {
                navigateToPage(page);
            }
        });
    });

    // Гамбургер меню для мобільних пристроїв
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Закриття мобільного меню при кліку на посилання
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Обробка форми контактів
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Обробка кнопок "Детальніше" на сторінці послуг
    const serviceButtons = document.querySelectorAll('.service-btn');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            showServiceDetails(this);
        });
    });

    // Обробка кнопки "Дізнатися більше" на головній сторінці
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage('services');
        });
    }

    // Обробка зміни хеша в URL
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.slice(1);
        if (hash && ['home', 'services', 'about', 'contact'].includes(hash)) {
            navigateToPage(hash);
        }
    });
}

// Навігація між сторінками з ефектами
function navigateToPage(pageName) {
    if (isAnimating || currentPage === pageName) return;
    
    isAnimating = true;
    
    // Оновлюємо URL
    window.location.hash = pageName;
    
    // Анімація переходу
    const currentPageElement = document.getElementById(currentPage);
    const newPageElement = document.getElementById(pageName);
    
    if (currentPageElement && newPageElement) {
        // Анімація виходу поточної сторінки
        currentPageElement.style.animation = 'fadeOut 0.3s ease-in-out forwards';
        
        setTimeout(() => {
            // Приховуємо поточну сторінку
            currentPageElement.classList.remove('active');
            currentPageElement.style.animation = '';
            
            // Показуємо нову сторінку
            showPage(pageName);
            
            // Оновлюємо активне посилання в навігації
            updateActiveNavLink(pageName);
            
            // Прокручуємо до верху
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            currentPage = pageName;
            isAnimating = false;
        }, 300);
    } else {
        isAnimating = false;
    }
}

// Показ сторінки
function showPage(pageName) {
    // Приховуємо всі сторінки
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Показуємо потрібну сторінку
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Додаємо анімацію появи
        targetPage.style.animation = 'fadeIn 0.5s ease-in-out';
        
        // Видаляємо анімацію після завершення
        setTimeout(() => {
            targetPage.style.animation = '';
        }, 500);
    }
}

// Оновлення активного посилання в навігації
function updateActiveNavLink(pageName) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
}

// Перемикання мобільного меню
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Анімація гамбургера
    const bars = hamburger.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Обробка форми контактів
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Валідація
    if (!data.name || !data.email || !data.message) {
        showNotification('Будь ласка, заповніть всі обов\'язкові поля', 'error');
        return;
    }
    
    // Симуляція відправки
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Відправка...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Дякуємо! Ваше повідомлення успішно відправлено.', 'success');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Показ деталей послуги
function showServiceDetails(button) {
    const serviceCard = button.closest('.service-card');
    const serviceName = serviceCard.querySelector('h3').textContent;
    
    showNotification(`Детальна інформація про послугу "${serviceName}" буде показана в модальному вікні.`, 'info');
}

// Система сповіщень
function showNotification(message, type = 'info') {
    // Видаляємо існуючі сповіщення
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Створюємо нове сповіщення
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Додаємо стилі
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Анімація появи
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Обробник закриття
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Автоматичне закриття через 5 секунд
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Допоміжні функції для сповіщень
function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#2563eb',
        warning: '#f59e0b'
    };
    return colors[type] || colors.info;
}

// Налаштування анімацій при скролі
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Додаємо елементи для анімації
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .stat-item, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Функція для плавного скролу до секції
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Додаємо CSS анімації
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        font-size: 1rem;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    /* Додаткові анімації для інтерактивності */
    .service-card:hover .service-image img {
        transform: scale(1.1);
    }
    
    .feature-card:hover {
        transform: translateY(-10px);
    }
    
    .nav-link:hover {
        transform: translateY(-2px);
    }
    
    /* Анімація для статистики */
    .stat-item h4 {
        transition: all 0.3s ease;
    }
    
    .stat-item:hover h4 {
        transform: scale(1.1);
        color: #1d4ed8;
    }
`;

document.head.appendChild(style);

// Додаткові функції для покращення UX
function addLoadingState(element) {
    element.style.opacity = '0.7';
    element.style.pointerEvents = 'none';
}

function removeLoadingState(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Функція для збереження стану в localStorage
function saveState() {
    const state = {
        currentPage: currentPage,
        timestamp: Date.now()
    };
    localStorage.setItem('travelSiteState', JSON.stringify(state));
}

// Функція для відновлення стану
function restoreState() {
    const savedState = localStorage.getItem('travelSiteState');
    if (savedState) {
        const state = JSON.parse(savedState);
        const timeDiff = Date.now() - state.timestamp;
        
        // Відновлюємо стан тільки якщо не минуло більше 1 години
        if (timeDiff < 3600000) {
            navigateToPage(state.currentPage);
        }
    }
}

// Зберігаємо стан при зміні сторінки
window.addEventListener('beforeunload', saveState);

// Відновлюємо стан при завантаженні
window.addEventListener('load', restoreState);

// Додаткові ефекти та анімації

// Створення частинок
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    hero.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Ефект матриці
function createMatrixEffect() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-bg';
    document.body.appendChild(matrixContainer);
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    function addMatrixChar() {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDuration = (Math.random() * 2 + 2) + 's';
        matrixContainer.appendChild(char);
        
        setTimeout(() => {
            if (char.parentNode) {
                char.remove();
            }
        }, 4000);
    }
    
    setInterval(addMatrixChar, 100);
}

// Ефект конфетті
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 5000);
    }
}

// Магнітний ефект для кнопок
function setupMagneticButtons() {
    const buttons = document.querySelectorAll('.cta-button, .service-btn, .submit-btn');
    
    buttons.forEach(button => {
        button.classList.add('magnetic-button');
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Ефект глітчу для заголовків
function setupGlitchEffect() {
    const titles = document.querySelectorAll('.hero-title, .page-header h2');
    
    titles.forEach(title => {
        title.classList.add('glitch-text');
        title.setAttribute('data-text', title.textContent);
    });
}

// Ефект неонового світіння
function setupNeonEffect() {
    const elements = document.querySelectorAll('.nav-logo, .hero-subtitle');
    
    elements.forEach(element => {
        element.classList.add('neon-text');
    });
}

// Ефект паралаксу при скролі
function setupParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Ефект типінг для заголовків
function setupTypingEffect() {
    // Функція відключена - заголовки відображаються зразу
}

// Ефект збільшення статистики
function animateStats() {
    const stats = document.querySelectorAll('.stat-item h4');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                let currentValue = 0;
                
                const increment = () => {
                    if (currentValue < finalValue) {
                        currentValue += Math.ceil(finalValue / 50);
                        target.textContent = currentValue + '+';
                        setTimeout(increment, 50);
                    } else {
                        target.textContent = finalValue + '+';
                    }
                };
                
                increment();
                observer.unobserve(target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Ефект хвиль для карток
function setupWaveEffect() {
    const cards = document.querySelectorAll('.feature-card, .service-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Ефект світіння для навігації
function setupNavigationGlow() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.boxShadow = '0 0 20px rgba(220, 38, 38, 0.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.style.boxShadow = 'none';
            }
        });
    });
}

// Ініціалізація всіх ефектів
function initializeEffects() {
    createParticles();
    createMatrixEffect();
    setupMagneticButtons();
    setupGlitchEffect();
    setupNeonEffect();
    setupParallaxEffect();
    setupTypingEffect();
    animateStats();
    setupWaveEffect();
    setupNavigationGlow();
}

// Запуск ефектів після завантаження
document.addEventListener('DOMContentLoaded', function() {
    // Затримка для плавного запуску
    setTimeout(initializeEffects, 1000);
});

// Ефект конфетті при успішній відправці форми
const originalHandleContactForm = handleContactForm;
handleContactForm = function(e) {
    originalHandleContactForm.call(this, e);
    createConfetti();
}; 
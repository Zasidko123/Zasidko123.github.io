// Auto Parts Store - Main JavaScript

// Initialize language manager
const languageManager = new LanguageManager();

class AutoPartsStore {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.products = this.loadProducts();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.init();
    }

    init() {
        this.updateCartBadge();
        this.setupEventListeners();
        this.loadPageContent();
    }

    loadProducts() {
        return [
            {
                id: 1,
                name: "Тормозні колодки Brembo",
                category: "brakes",
                brand: "Brembo",
                price: 2500,
                originalPrice: 3000,
                image: "https://images.unsplash.com/photo-1562141960-6827839c9cec?w=300",
                rating: 4.8,
                stock: 15,
                description: "Високоякісні тормозні колодки для легкових автомобілів"
            },
            {
                id: 2,
                name: "Масляний фільтр Mann",
                category: "filters",
                brand: "Mann",
                price: 180,
                originalPrice: 220,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
                rating: 4.6,
                stock: 50,
                description: "Оригінальний масляний фільтр для двигуна"
            },
            {
                id: 3,
                name: "Амортизатор KYB",
                category: "suspension",
                brand: "KYB",
                price: 1200,
                originalPrice: 1500,
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300",
                rating: 4.7,
                stock: 8,
                description: "Якісний амортизатор для комфортної їзди"
            },
            {
                id: 4,
                name: "Свічка запалювання NGK",
                category: "electrical",
                brand: "NGK",
                price: 120,
                originalPrice: 150,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
                rating: 4.9,
                stock: 100,
                description: "Надійні свічки запалювання для оптимальної роботи двигуна"
            },
            {
                id: 5,
                name: "Ремінь ГРМ Gates",
                category: "belts",
                brand: "Gates",
                price: 800,
                originalPrice: 1000,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
                rating: 4.5,
                stock: 12,
                description: "Якісний ремінь газорозподільного механізму"
            },
            {
                id: 6,
                name: "Радіатор охолодження Nissens",
                category: "cooling",
                brand: "Nissens",
                price: 3500,
                originalPrice: 4200,
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
                rating: 4.4,
                stock: 5,
                description: "Ефективний радіатор для системи охолодження"
            }
        ];
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        }

        // Cart functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const productId = parseInt(e.target.dataset.productId);
                this.addToCart(productId);
            }
        });

        // Filter functionality
        const filterInputs = document.querySelectorAll('.filter-checkbox');
        filterInputs.forEach(input => {
            input.addEventListener('change', () => this.applyFilters());
        });

        // Price range slider
        const priceRange = document.getElementById('priceRange');
        if (priceRange) {
            priceRange.addEventListener('input', (e) => this.updatePriceDisplay(e.target.value));
        }
    }

    loadPageContent() {
        const currentPage = this.getCurrentPage();
        
        switch (currentPage) {
            case 'catalog':
                this.loadCatalog();
                break;
            case 'cart':
                this.loadCart();
                break;
            case 'search':
                this.loadSearch();
                break;
            case 'brands':
                this.loadBrands();
                break;
            case 'login':
                this.loadLogin();
                break;
            case 'register':
                this.loadRegister();
                break;
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '');
        return filename === '' ? 'index' : filename;
    }

    handleSearch(query) {
        if (query.length < 2) return;
        
        const results = this.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
        
        this.displaySearchResults(results);
    }

    displaySearchResults(results) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="text-center">Нічого не знайдено</p>';
            return;
        }

        const html = results.map(product => this.createProductCard(product)).join('');
        resultsContainer.innerHTML = html;
    }

    createProductCard(product) {
        const discount = product.originalPrice > product.price ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
        
        const stockStatus = product.stock > 10 ? 'in-stock' : 
                           product.stock > 0 ? 'low-stock' : 'out-of-stock';
        const stockText = product.stock > 10 ? 'В наявності' : 
                         product.stock > 0 ? `Залишилось: ${product.stock}` : 'Немає в наявності';

        return `
            <div class="col-md-4 mb-4">
                <div class="card product-card h-100">
                    <div class="position-relative">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        ${discount > 0 ? `<span class="badge bg-danger position-absolute top-0 end-0 m-2">-${discount}%</span>` : ''}
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="product-rating mb-2">
                            ${this.createStarRating(product.rating)}
                            <small class="text-muted">(${product.rating})</small>
                        </div>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="product-price">${product.price} грн</span>
                                ${product.originalPrice > product.price ? 
                                    `<small class="text-muted text-decoration-line-through">${product.originalPrice} грн</small>` : ''}
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <span class="${stockStatus}">${stockText}</span>
                                <span class="text-muted">${product.brand}</span>
                            </div>
                            <button class="btn btn-primary w-100 add-to-cart" 
                                    data-product-id="${product.id}"
                                    ${product.stock === 0 ? 'disabled' : ''}>
                                <i class="fas fa-shopping-cart"></i> 
                                ${product.stock === 0 ? 'Немає в наявності' : 'Додати в кошик'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        return stars;
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartBadge();
        this.showToast(this.getText('message.added.to.cart'), 'success');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartBadge();
        this.loadCart();
        this.showToast(this.getText('message.removed.from.cart'), 'info');
    }

    updateQuantity(productId, newQuantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
                this.updateCartBadge();
                this.loadCart();
            }
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateCartBadge() {
        const badge = document.querySelector('.cart-badge .badge');
        if (badge) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    loadCatalog() {
        const container = document.getElementById('productsContainer');
        if (!container) return;

        const html = this.products.map(product => this.createProductCard(product)).join('');
        container.innerHTML = html;
    }

    loadCart() {
        const container = document.getElementById('cartContainer');
        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                    <h4>Кошик порожній</h4>
                    <p class="text-muted">Додайте товари з каталогу</p>
                    <a href="catalog.html" class="btn btn-primary">Перейти до каталогу</a>
                </div>
            `;
            return;
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const cartItems = this.cart.map(item => `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-2">
                        <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">Ціна: ${item.price} грн</p>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-sm btn-outline-secondary me-2" 
                                        onclick="store.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                                <span class="mx-2">${item.quantity}</span>
                                <button class="btn btn-sm btn-outline-secondary ms-2" 
                                        onclick="store.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                                <button class="btn btn-sm btn-danger ms-3" 
                                        onclick="store.removeFromCart(${item.id})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 d-flex align-items-center justify-content-center">
                        <h5>${item.price * item.quantity} грн</h5>
                    </div>
                </div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="row">
                <div class="col-md-8">
                    ${cartItems}
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Підсумок замовлення</h5>
                            <p class="card-text">Товарів: ${this.cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
                            <h4>Загальна сума: ${total} грн</h4>
                            <button class="btn btn-success w-100" onclick="store.checkout()">
                                <i class="fas fa-credit-card"></i> Оформити замовлення
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    checkout() {
        if (!this.currentUser) {
            this.showToast('Будь ласка, увійдіть в систему для оформлення замовлення', 'warning');
            return;
        }

        this.showToast(this.getText('message.order.placed'), 'success');
        this.cart = [];
        this.saveCart();
        this.updateCartBadge();
        this.loadCart();
    }

    showToast(message, type = 'info') {
        // Не показуємо toast при зміні мови
        if (message.includes('language') || message.includes('мова') || message.includes('язык')) {
            return;
        }
        
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) {
            createToastContainer();
        }
        
        const toast = document.createElement('div');
        toast.className = `toast align-items-center text-white bg-${type} border-0`;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');
        
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        `;
        
        document.getElementById('toastContainer').appendChild(toast);
        
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
        
        // Remove toast after it's hidden
        toast.addEventListener('hidden.bs.toast', () => {
            toast.remove();
        });
    }

    // Get translated text
    getText(key, params = {}) {
        if (window.languageManager) {
            return window.languageManager.getText(key, params);
        }
        return key;
    }

    createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    }

    applyFilters() {
        // Implementation for filtering products
        console.log('Applying filters...');
    }

    updatePriceDisplay(value) {
        const priceDisplay = document.getElementById('priceDisplay');
        if (priceDisplay) {
            priceDisplay.textContent = `До ${value} грн`;
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language manager (без повідомлень)
    languageManager.init();
    
    // Initialize cart
    initCart();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize product interactions
    initProductInteractions();
    
    // Initialize forms
    initForms();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 
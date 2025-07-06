// Initialize Foundation
$(document).ready(function() {
    $(document).foundation();
});

// Shopping Cart Functionality
let cart = [];
let cartCount = 0;

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h4').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        const productImage = productCard.querySelector('img').src;
        
        addToCart(productName, productPrice, productImage);
        
        // Show success message
        showMessage('Product added to cart!', 'success');
        
        // Update cart count
        updateCartCount();
    });
});

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    cartCount += 1;
    saveCart();
}

function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function saveCart() {
    localStorage.setItem('shopHubCart', JSON.stringify(cart));
    localStorage.setItem('shopHubCartCount', cartCount);
}

function loadCart() {
    const savedCart = localStorage.getItem('shopHubCart');
    const savedCount = localStorage.getItem('shopHubCartCount');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    if (savedCount) {
        cartCount = parseInt(savedCount);
        updateCartCount();
    }
}

// Cart icon click handler
document.querySelectorAll('.cart-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        showCartModal();
    });
});

function showCartModal() {
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.innerHTML = `
        <div class="cart-content">
            <h3>Shopping Cart</h3>
            <div id="cart-items">
                ${cart.length === 0 ? '<p>Your cart is empty</p>' : ''}
            </div>
            <div class="cart-total">
                Total: $${calculateTotal()}
            </div>
            <div class="cart-actions">
                <button class="button secondary" onclick="closeCartModal()">Continue Shopping</button>
                <button class="button primary" onclick="checkout()">Checkout</button>
            </div>
            <button class="close-modal" onclick="closeCartModal()">&times;</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Populate cart items
    if (cart.length > 0) {
        const cartItemsContainer = modal.querySelector('#cart-items');
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price} x ${item.quantity}</div>
                </div>
                <button class="button small alert" onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `).join('');
    }
}

function closeCartModal() {
    const modal = document.querySelector('.cart-modal');
    if (modal) {
        modal.remove();
    }
}

function removeFromCart(productName) {
    const itemIndex = cart.findIndex(item => item.name === productName);
    if (itemIndex > -1) {
        cartCount -= cart[itemIndex].quantity;
        cart.splice(itemIndex, 1);
        saveCart();
        updateCartCount();
        showCartModal(); // Refresh modal
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + (price * item.quantity);
    }, 0).toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        showMessage('Your cart is empty!', 'error');
        return;
    }
    
    showMessage('Redirecting to checkout...', 'success');
    // Here you would typically redirect to a checkout page
    setTimeout(() => {
        showMessage('Checkout functionality would be implemented here!', 'info');
    }, 2000);
}

// Product filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
});

function filterProducts() {
    // This would implement actual filtering logic
    showMessage('Filtering products...', 'info');
}

function clearFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (categoryFilter) categoryFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    if (sortFilter) sortFilter.value = 'name';
    
    showMessage('Filters cleared!', 'success');
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animated counters for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Intersection Observer for animated counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stats section
const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    observer.observe(statsSection);
}

// Message system
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; font-size: 1.2rem; cursor: pointer;">&times;</button>
    `;
    
    // Insert at the top of the page
    const container = document.querySelector('.grid-container') || document.body;
    container.insertBefore(messageDiv, container.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// FAQ section functionality
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Add hover effects to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add hover effects to category cards
document.querySelectorAll('.category-card, .category-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Smooth scrolling for anchor links
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

// Load cart on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    
    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.product-card, .category-card, .category-item, .value-card');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
            setTimeout(() => el.classList.add('visible'), 100);
        }, index * 100);
    });
});

// Add CSS for FAQ items
const faqStyles = document.createElement('style');
faqStyles.textContent = `
    .faq-item {
        background: #f8f9fa;
        padding: 1.5rem;
        margin-bottom: 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .faq-item:hover {
        background: #e9ecef;
    }
    
    .faq-item h4 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    
    .faq-item p {
        color: #666;
        line-height: 1.6;
    }
    
    .value-card {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }
    
    .value-card:hover {
        transform: translateY(-5px);
    }
    
    .value-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        color: white;
        font-size: 1.5rem;
    }
    
    .cart-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
    }
    
    .close-modal:hover {
        color: #333;
    }
`;
document.head.appendChild(faqStyles); 
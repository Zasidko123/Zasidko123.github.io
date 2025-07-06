// Menu data for restaurant
const menuData = {
    appetizers: [
        { name: "Bruschetta", description: "Toasted bread with fresh tomatoes, basil, and mozzarella", price: "$12", image: "🥖" },
        { name: "Calamari", description: "Crispy fried squid with marinara sauce", price: "$16", image: "🦑" },
        { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze", price: "$14", image: "🥗" },
        { name: "Garlic Bread", description: "Crusty bread with garlic butter and herbs", price: "$8", image: "🍞" }
    ],
    main: [
        { name: "Grilled Salmon", description: "Atlantic salmon with lemon herb butter and seasonal vegetables", price: "$32", image: "🐟" },
        { name: "Beef Tenderloin", description: "8oz tenderloin with red wine reduction and mashed potatoes", price: "$38", image: "🥩" },
        { name: "Pasta Carbonara", description: "Spaghetti with pancetta, eggs, and parmesan cheese", price: "$24", image: "🍝" },
        { name: "Chicken Marsala", description: "Pan-seared chicken with marsala wine sauce and mushrooms", price: "$28", image: "🍗" },
        { name: "Risotto ai Funghi", description: "Creamy mushroom risotto with parmesan", price: "$26", image: "🍚" }
    ],
    desserts: [
        { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: "$12", image: "🍰" },
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center and vanilla ice cream", price: "$14", image: "🍫" },
        { name: "Panna Cotta", description: "Silky vanilla custard with berry compote", price: "$10", image: "🍮" },
        { name: "Gelato", description: "House-made Italian ice cream in various flavors", price: "$8", image: "🍨" }
    ],
    drinks: [
        { name: "Italian Red Wine", description: "Premium selection of Italian red wines", price: "$12/glass", image: "🍷" },
        { name: "Prosecco", description: "Sparkling Italian wine", price: "$10/glass", image: "🥂" },
        { name: "Espresso", description: "Strong Italian coffee", price: "$4", image: "☕" },
        { name: "Limoncello", description: "Traditional Italian lemon liqueur", price: "$8", image: "🍋" }
    ]
};

// Load menu items
function loadMenu(category = 'all') {
    const menuGrid = document.getElementById('menu-grid');
    let items = [];
    
    if (category === 'all') {
        Object.values(menuData).forEach(cat => {
            items = items.concat(cat);
        });
    } else {
        items = menuData[category] || [];
    }
    
    menuGrid.innerHTML = '';
    
    items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'col-lg-6 col-md-6 mb-4';
        menuItem.innerHTML = `
            <div class="menu-item">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                    </div>
                    <div class="menu-price">${item.price}</div>
                </div>
                <div class="text-center mt-3">
                    <span style="font-size: 2rem;">${item.image}</span>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
        
        // Add staggered animation
        setTimeout(() => {
            menuItem.style.opacity = '0';
            menuItem.style.transform = 'translateY(30px)';
            menuItem.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                menuItem.style.opacity = '1';
                menuItem.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
}

// Menu filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        // Add active class to clicked button
        this.classList.add('active');
        // Load menu for selected category
        loadMenu(this.dataset.filter);
    });
});

// Gallery lightbox functionality
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const overlay = this.querySelector('.gallery-overlay');
        const title = overlay.querySelector('h5').textContent;
        const description = overlay.querySelector('p').textContent;
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        `;
        
        lightbox.innerHTML = `
            <div class="text-center text-white">
                <img src="${img.src}" alt="${title}" style="max-width: 80%; max-height: 70%; object-fit: contain; border-radius: 15px;">
                <h3 class="mt-4">${title}</h3>
                <p class="mt-2">${description}</p>
                <button class="btn btn-outline-light mt-3" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                this.remove();
            }
        });
    });
});

// Chef stats animation
const chefStatsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^\d]/g, ''));
                const suffix = text.replace(/[\d]/g, '');
                
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + suffix;
                }, 30);
            });
            chefStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe chef stats
document.querySelectorAll('.chef-stats').forEach(stats => {
    chefStatsObserver.observe(stats);
});

// Review card hover effects
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Review stats animation
const reviewStatsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-item h4');
            stats.forEach(stat => {
                const text = stat.textContent;
                const number = parseFloat(text.replace(/[^\d.]/g, ''));
                const suffix = text.replace(/[\d.]/g, '');
                
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    stat.textContent = current.toFixed(1) + suffix;
                }, 30);
            });
            reviewStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe review stats
document.querySelectorAll('.review-stats').forEach(stats => {
    reviewStatsObserver.observe(stats);
});

// Contact form functionality
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const guests = this.querySelector('input[type="number"]').value;
    const date = this.querySelector('input[type="date"]').value;
    const time = this.querySelector('input[type="time"]').value;
    const requests = this.querySelector('textarea').value;
    
    // Add loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Booking...';
    submitBtn.disabled = true;
    
    // Simulate booking process
    setTimeout(() => {
        alert(`Thank you ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been confirmed. We'll send a confirmation to ${email}.`);
        
        // Reset form
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Specialty tags hover effects
document.querySelectorAll('.specialty-tags .badge').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
        this.style.background = '#fff !important';
        this.style.color = '#1a1a1a !important';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.background = '#ffd700 !important';
        this.style.color = '#1a1a1a !important';
    });
});

// Add parallax effect to chef section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const chefSection = document.querySelector('.chef-section');
    if (chefSection) {
        const rate = scrolled * -0.2;
        chefSection.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to chef bio
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect for chef bio
document.addEventListener('DOMContentLoaded', function() {
    const chefBio = document.querySelector('.chef-bio');
    if (chefBio) {
        const originalText = chefBio.textContent;
        setTimeout(() => {
            typeWriter(chefBio, originalText, 30);
        }, 1000);
    }
});

// Add floating animation to menu item images
document.querySelectorAll('.menu-item span').forEach(icon => {
    icon.style.animation = 'float 3s ease-in-out infinite';
});

// Add CSS animation for floating effect
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .menu-item:hover span {
        animation: float 1s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// Initialize menu on page load
document.addEventListener('DOMContentLoaded', function() {
    loadMenu('all');
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    
    // Show success message using Bootstrap alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.innerHTML = `
        Thank you ${name}! Your reservation request has been submitted. We'll confirm via email at ${email}.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    this.parentNode.insertBefore(alertDiv, this);
    this.reset();
    
    // Auto-dismiss alert after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop - 76; // Account for fixed navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Animate stats on scroll
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('h3');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + '+';
                }, 30);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Load initial menu and set up animations
document.addEventListener('DOMContentLoaded', function() {
    loadMenu('starters');
    
    // Observe stats section
    const statsSection = document.querySelector('.stat');
    if (statsSection) {
        statsObserver.observe(statsSection.parentNode.parentNode);
    }
    
    // Add scroll animations
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Add navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 24, 16, 0.98)';
    } else {
        navbar.style.background = 'rgba(44, 24, 16, 0.95)';
    }
});

// Gallery functionality
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Testimonials carousel
function initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 300);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Show success message using Bootstrap alert
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show';
        alertDiv.innerHTML = `
            Thank you ${name}! Your message has been sent successfully. We'll get back to you at ${email} soon.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        this.parentNode.insertBefore(alertDiv, this);
        this.reset();
        
        // Auto-dismiss alert after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    });
}

// Add scroll animations
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery
    initGallery();
    
    // Initialize testimonials
    initTestimonials();
    
    // Initialize contact form
    initContactForm();
    
    // Observe chef stats section
    const chefStatsSection = document.querySelector('.chef-stats');
    if (chefStatsSection) {
        chefStatsObserver.observe(chefStatsSection);
    }
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Add hover effects to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 200);
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
}); 
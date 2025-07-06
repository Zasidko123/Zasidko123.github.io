// JavaScript for Wanderlust Travel Agency

document.addEventListener('DOMContentLoaded', function() {
    
    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.ui.vertical.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('visible');
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('visible');
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Destination cards hover effect
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service items animation
    const serviceItems = document.querySelectorAll('.service-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    serviceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Testimonial cards carousel effect
    let currentTestimonial = 0;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Auto-rotate testimonials
    if (testimonialCards.length > 0) {
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // Hero video controls
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        // Pause video on mobile to save bandwidth
        if (window.innerWidth <= 768) {
            heroVideo.pause();
        }
        
        // Add play/pause functionality
        heroVideo.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-video-section');
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Form validation for contact form
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#db2828';
                } else {
                    field.style.borderColor = '#21ba45';
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Message sent successfully!', 'success');
                this.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }

    // Notification system
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `ui ${type === 'success' ? 'positive' : 'negative'} message`;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.zIndex = '9999';
        notification.innerHTML = `
            <i class="close icon"></i>
            <div class="header">${type === 'success' ? 'Success!' : 'Error!'}</div>
            <p>${message}</p>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.close.icon');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
    }

    // Search functionality for destinations
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const destinationCards = document.querySelectorAll('.destination-card');
            
            destinationCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Loading animation
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
        }
        
        .ui.vertical.sidebar {
            transition: transform 0.3s ease;
        }
        
        .ui.vertical.sidebar.visible {
            transform: translateX(0);
        }
    `;
    document.head.appendChild(style);

    console.log('Wanderlust Travel Agency JavaScript loaded successfully!');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 62, 80, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Destination filter functionality
    const filterButtons = document.querySelectorAll('.btn-filter');
    const destinationCardsFilter = document.querySelectorAll('[data-category]');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            destinationCardsFilter.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Contact form handling
    const contactFormHandler = document.querySelector('.contact-form');
    if (contactFormHandler) {
        contactFormHandler.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.firstName || !data.lastName || !data.email || !data.message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            this.reset();
        });
    }

    // Notification system
    function showNotificationHandler(message, type) {
        const notificationHandler = document.createElement('div');
        notificationHandler.className = `notification notification-${type}`;
        notificationHandler.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notificationHandler);
        
        // Show notification
        setTimeout(() => {
            notificationHandler.classList.add('show');
        }, 100);
        
        // Hide notification after 5 seconds
        setTimeout(() => {
            notificationHandler.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notificationHandler);
            }, 300);
        }, 5000);
    }

    // Add CSS for notifications
    const notificationStyleHandler = document.createElement('style');
    notificationStyleHandler.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            padding: 15px 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-success {
            border-left: 4px solid #27ae60;
        }
        
        .notification-error {
            border-left: 4px solid #e74c3c;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
        
        .notification-success .notification-content i {
            color: #27ae60;
        }
        
        .notification-error .notification-content i {
            color: #e74c3c;
        }
    `;
    document.head.appendChild(notificationStyleHandler);

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolledHandler = window.pageYOffset;
        const heroSectionHandler = document.querySelector('.hero-section');
        if (heroSectionHandler) {
            const rateHandler = scrolledHandler * -0.5;
            heroSectionHandler.style.transform = `translateY(${rateHandler}px)`;
        }
    });

    // Animate elements on scroll
    const animateOnScrollHandler = () => {
        const elementsHandler = document.querySelectorAll('.destination-card, .package-card, .value-card, .team-card');
        
        elementsHandler.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScrollHandler);

    // Button hover effects
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Stats counter animation
    const statsHandler = document.querySelectorAll('.stat-number');
    const observerOptionsHandler = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observerHandler = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.textContent.replace('+', ''));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateStat = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateStat);
                    } else {
                        stat.textContent = target + '+';
                    }
                };

                updateStat();
                observerHandler.unobserve(stat);
            }
        });
    }, observerOptionsHandler);

    statsHandler.forEach(stat => {
        observerHandler.observe(stat);
    });

    // Floating cards animation
    const floatingCardsHandler = document.querySelectorAll('.card-item');
    floatingCardsHandler.forEach((card, index) => {
        card.style.animationDelay = `${index * 2}s`;
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Add CSS for loading state
    const loadingStyleHandler = document.createElement('style');
    loadingStyleHandler.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        .destination-card,
        .package-card,
        .value-card,
        .team-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
    `;
    document.head.appendChild(loadingStyleHandler);

    // Mobile menu functionality
    const navbarTogglerHandler = document.querySelector('.navbar-toggler');
    const navbarCollapseHandler = document.querySelector('.navbar-collapse');
    
    if (navbarTogglerHandler && navbarCollapseHandler) {
        navbarTogglerHandler.addEventListener('click', function() {
            navbarCollapseHandler.classList.toggle('show');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbarCollapseHandler.classList.remove('show');
            });
        });
    }

    // Add smooth transitions for all interactive elements
    const transitionStyleHandler = document.createElement('style');
    transitionStyleHandler.textContent = `
        * {
            transition: all 0.3s ease;
        }
        
        .btn {
            transition: all 0.3s ease;
        }
        
        .card-item {
            transition: all 0.3s ease;
        }
        
        .faq-question {
            transition: all 0.3s ease;
        }
        
        .faq-answer {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(transitionStyleHandler);
}); 
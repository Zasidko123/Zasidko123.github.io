// CreativeStudio JavaScript - Circular Navigation & Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Circular Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Animated Text Effect
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        const words = ['Amazing', 'Creative', 'Innovative', 'Beautiful', 'Stunning'];
        let currentIndex = 0;
        
        setInterval(() => {
            animatedText.style.opacity = '0';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % words.length;
                animatedText.textContent = words[currentIndex];
                animatedText.style.opacity = '1';
            }, 300);
        }, 3000);
    }

    // Floating Shapes Animation
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 0.5}s`;
    });

    // Service Cards Hover Effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Portfolio Items Interaction
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Smooth Scrolling for Navigation
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

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroLeft = document.querySelector('.hero-left');
        const heroRight = document.querySelector('.hero-right');
        
        if (heroLeft && heroRight) {
            const rate = scrolled * -0.5;
            heroLeft.style.transform = `translateY(${rate}px)`;
            heroRight.style.transform = `translateY(${rate * 0.5}px)`;
        }
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .portfolio-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);

    // Button hover effects
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
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
                observer.unobserve(stat);
            }
        });
    }, observerOptions);

    stats.forEach(stat => {
        observer.observe(stat);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .nav-menu.active .nav-item {
            animation: slideIn 0.3s ease-out forwards;
        }
        
        .nav-item:nth-child(1) { animation-delay: 0.1s; }
        .nav-item:nth-child(2) { animation-delay: 0.2s; }
        .nav-item:nth-child(3) { animation-delay: 0.3s; }
        .nav-item:nth-child(4) { animation-delay: 0.4s; }
        .nav-item:nth-child(5) { animation-delay: 0.5s; }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .animated-text {
            transition: opacity 0.3s ease;
        }
        
        .service-card {
            transition: all 0.3s ease;
        }
        
        .portfolio-item {
            transition: all 0.3s ease;
        }
        
        .btn {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Add CSS for loading state
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Add mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            const hamburger = document.querySelector('.hamburger');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}); 
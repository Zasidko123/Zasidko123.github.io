// TechVision - JavaScript Effects and Animations

// Rocket launch effect on page load
function initRocketEffect() {
    // Create rocket element
    const rocket = document.createElement('div');
    rocket.className = 'rocket-launch';
    rocket.innerHTML = `
        <div class="rocket-body">
            <div class="rocket-nose"></div>
            <div class="rocket-main"></div>
            <div class="rocket-fins">
                <div class="fin fin-1"></div>
                <div class="fin fin-2"></div>
                <div class="fin fin-3"></div>
            </div>
        </div>
        <div class="rocket-flame">
            <div class="flame flame-1"></div>
            <div class="flame flame-2"></div>
            <div class="flame flame-3"></div>
        </div>
        <div class="rocket-trail"></div>
    `;
    
    // Create rocket CSS
    const rocketStyle = document.createElement('style');
    rocketStyle.textContent = `
        .rocket-launch {
            position: fixed;
            top: 50%;
            left: -100px;
            width: 60px;
            height: 120px;
            z-index: 10000;
            animation: rocket-fly 3s ease-in-out forwards;
            pointer-events: none;
        }
        
        .rocket-body {
            position: relative;
            width: 100%;
            height: 100%;
        }
        
        .rocket-nose {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 30px solid #e74c3c;
        }
        
        .rocket-main {
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 60px;
            background: linear-gradient(135deg, #3498db, #2980b9);
            border-radius: 15px 15px 5px 5px;
        }
        
        .rocket-fins {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 20px;
        }
        
        .fin {
            position: absolute;
            width: 0;
            height: 0;
            border-top: 20px solid #34495e;
        }
        
        .fin-1 {
            left: -10px;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
        }
        
        .fin-2 {
            left: 50%;
            transform: translateX(-50%);
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
        }
        
        .fin-3 {
            right: -10px;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
        }
        
        .rocket-flame {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .flame {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            animation: flame-flicker 0.1s infinite alternate;
        }
        
        .flame-1 {
            width: 20px;
            height: 30px;
            background: linear-gradient(to top, #f39c12, #e67e22);
            animation-delay: 0s;
        }
        
        .flame-2 {
            width: 15px;
            height: 25px;
            background: linear-gradient(to top, #e74c3c, #c0392b);
            animation-delay: 0.05s;
        }
        
        .flame-3 {
            width: 10px;
            height: 20px;
            background: linear-gradient(to top, #f1c40f, #f39c12);
            animation-delay: 0.1s;
        }
        
        .rocket-trail {
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 60px;
            background: linear-gradient(to top, rgba(52, 152, 219, 0.8), transparent);
            border-radius: 2px;
        }
        
        @keyframes rocket-fly {
            0% {
                transform: translateY(-50%) rotate(-15deg);
                left: -100px;
            }
            20% {
                transform: translateY(-50%) rotate(-5deg);
                left: 20%;
            }
            50% {
                transform: translateY(-50%) rotate(0deg);
                left: 50%;
            }
            80% {
                transform: translateY(-50%) rotate(5deg);
                left: 80%;
            }
            100% {
                transform: translateY(-50%) rotate(15deg);
                left: calc(100% + 100px);
            }
        }
        
        @keyframes flame-flicker {
            0% {
                transform: translateX(-50%) scale(1);
            }
            100% {
                transform: translateX(-50%) scale(1.1);
            }
        }
        
        /* Rocket particles effect */
        .rocket-particle {
            position: fixed;
            width: 4px;
            height: 4px;
            background: #3498db;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: particle-fade 2s linear forwards;
        }
        
        @keyframes particle-fade {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
        
        /* Rocket entrance effect */
        .rocket-entrance {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: entrance-fade 4s ease-in-out forwards;
        }
        
        .rocket-entrance-text {
            color: white;
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            opacity: 0;
            animation: text-appear 2s ease-in-out 1s forwards;
        }
        
        @keyframes entrance-fade {
            0% {
                opacity: 1;
            }
            80% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                visibility: hidden;
            }
        }
        
        @keyframes text-appear {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(rocketStyle);
    
    // Create entrance overlay
    const entrance = document.createElement('div');
    entrance.className = 'rocket-entrance';
    entrance.innerHTML = `
        <div class="rocket-entrance-text">
            <div>🚀</div>
            <div>Welcome to TechVision</div>
            <div style="font-size: 1rem; margin-top: 1rem; opacity: 0.8;">Launching Innovation...</div>
        </div>
    `;
    
    // Add entrance and rocket to page
    document.body.appendChild(entrance);
    document.body.appendChild(rocket);
    
    // Create rocket particles
    function createRocketParticles() {
        const rocketRect = rocket.getBoundingClientRect();
        
        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.className = 'rocket-particle';
            particle.style.left = (rocketRect.left + rocketRect.width / 2) + 'px';
            particle.style.top = (rocketRect.bottom - 20) + 'px';
            particle.style.animationDelay = (i * 0.1) + 's';
            
            document.body.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }
    }
    
    // Create particles during rocket flight
    const particleInterval = setInterval(createRocketParticles, 100);
    
    // Clean up after rocket animation
    setTimeout(() => {
        clearInterval(particleInterval);
        if (rocket.parentNode) {
            rocket.parentNode.removeChild(rocket);
        }
        if (entrance.parentNode) {
            entrance.parentNode.removeChild(entrance);
        }
    }, 4000);
}

// Animate numbers on scroll
function animateNumbers() {
    const numbers = document.querySelectorAll('[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = Math.floor(current);
                }, 16);
                
                observer.unobserve(entry.target);
            }
        });
    });
    
    numbers.forEach(number => observer.observe(number));
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    typeWriter();
}

// Floating animation for shapes
function initFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 2}s`;
    });
}

// Card hover effects
function initCardEffects() {
    const cards = document.querySelectorAll('.feature-card, .service-card, .product-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Particle system
function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Loading animation
function initLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">TechVision</div>
        </div>
    `;
    
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
            color: white;
        }
        
        .loader-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        .loader-text {
            font-size: 1.5rem;
            font-weight: 700;
            animation: pulse 2s infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    `;
    document.head.appendChild(loaderStyle);
    
    document.body.appendChild(loader);
    
    // Remove loader after page loads and start rocket effect
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
                // Start rocket effect after loader is removed
                initRocketEffect();
            }, 500);
        }, 1000);
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.feature-card, .service-card, .product-card, .team-card, .blog-card');
    elements.forEach(el => observer.observe(el));
}

// Add CSS for scroll animations
const scrollAnimationStyle = document.createElement('style');
scrollAnimationStyle.textContent = `
    .feature-card,
    .service-card,
    .product-card,
    .team-card,
    .blog-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(scrollAnimationStyle);

// Cursor trail effect
function initCursorTrail() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #667eea, #f093fb);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.7;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLoadingAnimation();
    initParallax();
    initSmoothScroll();
    initTypingEffect();
    initFloatingShapes();
    initCardEffects();
    initParticles();
    initScrollAnimations();
    initCursorTrail();
    
    // Initialize number animations after a delay
    setTimeout(animateNumbers, 1000);
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add confetti effect on certain interactions
    function createConfetti() {
        const colors = ['#667eea', '#f093fb', '#43e97b', '#fa709a'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * window.innerWidth}px;
                top: -10px;
                animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
                pointer-events: none;
                z-index: 9997;
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }
    }
    
    // Add confetti animation CSS
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes confetti-fall {
            to {
                transform: translateY(${window.innerHeight}px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(confettiStyle);
    
    // Trigger confetti on logo click
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', createConfetti);
    }
}); 
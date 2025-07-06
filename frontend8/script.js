// Classes data for fitness center
const classesData = {
    all: [
        { name: "Morning HIIT", category: "hiit", description: "High-intensity interval training to start your day", time: "6:00 AM", icon: "🔥" },
        { name: "Yoga Flow", category: "yoga", description: "Gentle yoga for flexibility and mindfulness", time: "9:00 AM", icon: "🧘‍♀️" },
        { name: "Strength Training", category: "strength", description: "Build muscle and increase strength", time: "6:00 PM", icon: "💪" },
        { name: "Cardio Blast", category: "cardio", description: "Intense cardio workout for endurance", time: "7:00 AM", icon: "🏃‍♂️" },
        { name: "Power Yoga", category: "yoga", description: "Dynamic yoga for strength and balance", time: "5:30 PM", icon: "🧘‍♂️" },
        { name: "Strength & Conditioning", category: "strength", description: "Functional training for overall fitness", time: "6:00 AM", icon: "🏋️‍♀️" },
        { name: "HIIT Circuit", category: "hiit", description: "Circuit training with high intensity intervals", time: "6:00 PM", icon: "⚡" },
        { name: "Spinning", category: "cardio", description: "Indoor cycling for cardiovascular fitness", time: "7:30 AM", icon: "🚴‍♀️" },
        { name: "Pilates", category: "yoga", description: "Core strengthening and body awareness", time: "10:00 AM", icon: "🤸‍♀️" }
    ]
};

// Load classes with Tailwind classes
function loadClasses(category = 'all') {
    const classesGrid = document.getElementById('classes-grid');
    let classes = classesData.all;
    
    if (category !== 'all') {
        classes = classesData.all.filter(cls => cls.category === category);
    }
    
    classesGrid.innerHTML = '';
    
    classes.forEach((cls, index) => {
        const classCard = document.createElement('div');
        classCard.className = 'class-card bg-white p-6 rounded-2xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl border-l-4 border-primary loading';
        classCard.innerHTML = `
            <div class="text-4xl mb-4">${cls.icon}</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">${cls.name}</h3>
            <div class="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">${cls.category}</div>
            <div class="text-gray-600 mb-3">${cls.description}</div>
            <div class="text-gray-800 font-semibold">⏰ ${cls.time}</div>
        `;
        classesGrid.appendChild(classCard);
        
        // Staggered animation
        setTimeout(() => {
            classCard.classList.add('loaded');
        }, index * 100);
    });
}

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('bg-primary', 'text-white');
            b.classList.add('bg-gray-200', 'text-gray-700');
        });
        // Add active class to clicked button
        this.classList.remove('bg-gray-200', 'text-gray-700');
        this.classList.add('bg-primary', 'text-white');
        // Load classes for selected category
        loadClasses(this.dataset.filter);
    });
});

// Membership card interactions
document.querySelectorAll('.join-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const planName = this.closest('.membership-card').querySelector('h3').textContent;
        const price = this.closest('.membership-card').querySelector('.price').textContent;
        
        // Add shake animation
        this.classList.add('shake-animation');
        setTimeout(() => {
            this.classList.remove('shake-animation');
        }, 500);
        
        // Show confirmation modal
        if (confirm(`Join ${planName} plan for ${price}?`)) {
            alert(`Welcome to PowerFit! You've joined the ${planName} plan. We'll contact you shortly with your membership details.`);
        }
    });
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop - 64; // Account for fixed navbar
        
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
            const stats = entry.target.querySelectorAll('[data-count]');
            stats.forEach(stat => {
                const target = parseInt(stat.dataset.count);
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

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('glass-effect');
    } else {
        navbar.classList.remove('glass-effect');
    }
});

// Add hover effects to schedule slots
document.querySelectorAll('.class-slot').forEach(slot => {
    slot.addEventListener('mouseenter', function() {
        this.classList.add('bg-primary', 'text-white', 'scale-105');
        this.classList.remove('bg-white');
    });
    
    slot.addEventListener('mouseleave', function() {
        this.classList.remove('bg-primary', 'text-white', 'scale-105');
        this.classList.add('bg-white');
    });
});

// Add countdown timer for next class
function updateNextClass() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Find next class (simplified logic)
    const nextClass = document.querySelector('.class-slot');
    if (nextClass) {
        const timeText = nextClass.querySelector('.font-bold').textContent;
        const classTime = timeText.split(' ')[1]; // Get time part
        const [hour, minute] = classTime.split(':').map(Number);
        
        let timeDiff = (hour * 60 + minute) - (currentHour * 60 + currentMinute);
        if (timeDiff < 0) timeDiff += 24 * 60; // Next day
        
        const hours = Math.floor(timeDiff / 60);
        const minutes = timeDiff % 60;
        
        // Add countdown to page title
        document.title = `PowerFit - Next class in ${hours}h ${minutes}m`;
    }
}

// Add pulse animation to featured membership card
document.querySelector('.membership-card.featured').classList.add('pulse-animation');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadClasses('all');
    
    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // Add loading animation to all cards
    document.querySelectorAll('.class-card, .trainer-card, .membership-card').forEach(card => {
        card.classList.add('loading');
        setTimeout(() => {
            card.classList.add('loaded');
        }, Math.random() * 1000);
    });
    
    // Add focus ring to all interactive elements
    document.querySelectorAll('button, a, input, select').forEach(el => {
        el.classList.add('focus-ring');
    });
});

// Update countdown every minute
setInterval(updateNextClass, 60000);
updateNextClass(); // Initial call

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
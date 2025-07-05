// ChatApp без Firebase - використовуємо localStorage
class ChatApp {
    constructor() {
        this.currentUser = null;
        this.users = JSON.parse(localStorage.getItem('chatUsers')) || [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAuthState();
    }

    setupEventListeners() {
        // Login form
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAuth();
        });

        // Real-time validation
        document.getElementById('username').addEventListener('input', (e) => {
            this.validateUsername(e.target.value);
        });
    }

    checkAuthState() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.redirectToChat();
        }
    }

    async loginOrRegisterUser(username) {
        // Check if user already exists
        let existingUser = this.users.find(user => user.username === username);
        
        if (existingUser) {
            // User exists - login
            existingUser.lastSeen = new Date().toISOString();
            existingUser.isOnline = true;
            localStorage.setItem('chatUsers', JSON.stringify(this.users));
            
            this.currentUser = {
                id: existingUser.id,
                username: existingUser.username
            };
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            
            this.showSuccess('Ласкаво просимо назад! Перенаправлення до чату...');
        } else {
            // User doesn't exist - register
            const newUser = {
                id: Date.now().toString(),
                username: username,
                createdAt: new Date().toISOString(),
                lastSeen: new Date().toISOString(),
                isOnline: true
            };

            this.users.push(newUser);
            localStorage.setItem('chatUsers', JSON.stringify(this.users));

            this.currentUser = {
                id: newUser.id,
                username: newUser.username
            };
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

            this.showSuccess('Акаунт успішно створено! Перенаправлення до чату...');
        }
        
        this.redirectToChat();
    }

    async handleAuth() {
        const username = document.getElementById('username').value.trim();

        // Validation
        if (!this.validateUsername(username)) {
            return;
        }

        this.showLoading(true);

        try {
            await this.loginOrRegisterUser(username);
        } catch (error) {
            console.error('Auth error:', error);
            this.showError(error.message);
        } finally {
            this.showLoading(false);
        }
    }

    validateUsername(username) {
        if (username.length < 2) {
            this.showFieldError('username', 'Нікнейм повинен містити мінімум 2 символи');
            return false;
        }
        if (username.length > 20) {
            this.showFieldError('username', 'Нікнейм не може перевищувати 20 символів');
            return false;
        }
        this.clearFieldError('username');
        return true;
    }

    showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentNode.querySelector('.field-error') || 
                        document.createElement('div');
        
        errorDiv.className = 'field-error text-danger mt-1';
        errorDiv.textContent = message;
        
        if (!field.parentNode.querySelector('.field-error')) {
            field.parentNode.appendChild(errorDiv);
        }
        
        field.classList.add('is-invalid');
    }

    clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentNode.querySelector('.field-error');
        
        if (errorDiv) {
            errorDiv.remove();
        }
        
        field.classList.remove('is-invalid');
    }



    redirectToChat() {
        setTimeout(() => {
            window.location.href = 'chat.html';
        }, 1000);
    }

    showLoading(show) {
        document.getElementById('loadingSpinner').style.display = show ? 'flex' : 'none';
    }

    showError(message) {
        Swal.fire({
            title: 'Помилка!',
            text: message,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#667eea'
        });
    }

    showSuccess(message) {
        Swal.fire({
            title: 'Успішно!',
            text: message,
            icon: 'success',
            timer: 1000,
            showConfirmButton: false
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatApp();
}); 
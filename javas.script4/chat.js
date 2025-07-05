// ChatApp без Firebase - використовуємо localStorage та симуляцію реального часу
class ChatRoom {
    constructor() {
        this.currentUser = null;
        this.userData = null;
        this.messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        this.users = JSON.parse(localStorage.getItem('chatUsers')) || [];
        this.typingUsers = new Set();
        this.messageCount = this.messages.length;
        this.chatStartTime = new Date();
        this.updateInterval = null;
    }

    async init() {
        try {
            console.log('Initializing chat...');
            this.setupEventListeners();
            await this.checkAuth();
            this.setupEmojiPicker();
            this.updateChatStartTime();
            this.startRealTimeUpdates();
            this.loadMessages();
            console.log('Chat initialized successfully');
        } catch (error) {
            console.error('Error initializing chat:', error);
            this.showError('Помилка ініціалізації чату: ' + error.message);
        }
    }

    setupEventListeners() {
        try {
            // Message form
            const messageForm = document.getElementById('messageForm');
            if (messageForm) {
                messageForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.sendMessage();
                });
            }

            // Logout button
            const logoutBtn = document.getElementById('logoutBtn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    this.logout();
                });
            }

            // Emoji button
            const emojiBtn = document.getElementById('emojiBtn');
            if (emojiBtn) {
                emojiBtn.addEventListener('click', () => {
                    this.toggleEmojiPicker();
                });
            }

            // Message input for typing indicator
            const messageInput = document.getElementById('messageInput');
            if (messageInput) {
                messageInput.addEventListener('input', (e) => {
                    this.handleTyping(e.target.value);
                });
            }

            // User search
            const searchUserBtn = document.getElementById('searchUserBtn');
            if (searchUserBtn) {
                searchUserBtn.addEventListener('click', () => {
                    this.searchUser();
                });
            }

            const userSearchInput = document.getElementById('userSearchInput');
            if (userSearchInput) {
                userSearchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.searchUser();
                    }
                });
            }

            // Chat type selector
            const groupChatRadio = document.getElementById('groupChat');
            const privateChatRadio = document.getElementById('privateChat');
            
            if (groupChatRadio) {
                groupChatRadio.addEventListener('change', () => {
                    this.switchToGroupChat();
                });
            }
            
            if (privateChatRadio) {
                privateChatRadio.addEventListener('change', () => {
                    this.switchToPrivateChat();
                });
            }

            // Auto-scroll to bottom when new messages arrive
            const messagesArea = document.getElementById('messagesArea');
            if (messagesArea) {
                messagesArea.addEventListener('scroll', () => {
                    this.handleScroll();
                });
            }

            // Handle page visibility change
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.setUserOffline();
                } else {
                    this.setUserOnline();
                }
            });

            // Handle beforeunload
            window.addEventListener('beforeunload', () => {
                this.setUserOffline();
            });

            console.log('Event listeners setup completed');
        } catch (error) {
            console.error('Error setting up event listeners:', error);
        }
    }

    async checkAuth() {
        try {
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                this.currentUser = JSON.parse(savedUser);
                await this.loadUserData();
                this.setUserOnline();
            } else {
                // Redirect to login if no user data
                window.location.href = 'index.html';
            }
        } catch (error) {
            console.error('Auth check error:', error);
            // Clear corrupted data and redirect to login
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        }
    }

    async loadUserData() {
        try {
            const user = this.users.find(u => u.id === this.currentUser.id);
            if (user) {
                this.userData = user;
                const userNameElement = document.getElementById('currentUserName');
                if (userNameElement) {
                    userNameElement.textContent = this.userData.username;
                }
            } else {
                // User not found, redirect to login
                console.log('User not found in users list, redirecting to login');
                localStorage.removeItem('currentUser');
                window.location.href = 'index.html';
            }
        } catch (error) {
            console.error('Error loading user data:', error);
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        }
    }

    startRealTimeUpdates() {
        // Simulate real-time updates every 2 seconds
        this.updateInterval = setInterval(() => {
            this.updateUsersList();
            this.updateOnlineCount();
            this.checkForNewMessages();
        }, 2000);
    }

    loadMessages() {
        // Display existing messages
        this.messages.forEach(message => {
            this.addMessageToUI(message);
        });
        this.scrollToBottom();
    }

    checkForNewMessages() {
        // Check if we're in private chat
        const currentChatType = localStorage.getItem('currentChatType');
        const currentChatId = localStorage.getItem('currentChatId');
        
        if (currentChatType === 'private' && currentChatId) {
            // Check for new private messages
            const currentPrivateMessages = JSON.parse(localStorage.getItem(`privateMessages_${currentChatId}`)) || [];
            const displayedMessages = document.querySelectorAll('.message').length - 1; // -1 for system message
            
            if (currentPrivateMessages.length > displayedMessages) {
                // New private messages found
                const newMessages = currentPrivateMessages.slice(displayedMessages);
                newMessages.forEach(message => {
                    this.addMessageToUI(message);
                });
            }
        } else {
            // Check for new group messages
            const currentMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
            if (currentMessages.length > this.messages.length) {
                // New messages found
                const newMessages = currentMessages.slice(this.messages.length);
                newMessages.forEach(message => {
                    this.addMessageToUI(message);
                });
                this.messages = currentMessages;
                this.messageCount = this.messages.length;
                this.updateMessageCount();
            }
        }
    }

    async sendMessage() {
        try {
            const messageInput = document.getElementById('messageInput');
            if (!messageInput) {
                console.error('Message input not found');
                return;
            }

            const message = messageInput.value.trim();
            if (!message) return;

            // Check if user is authenticated
            if (!this.currentUser || !this.userData) {
                this.showError('Ви не авторизовані. Перезавантажте сторінку.');
                return;
            }

            console.log('Sending message:', message, 'from user:', this.userData.username);

            // Check if we're in private chat
            const currentChatType = localStorage.getItem('currentChatType');
            const currentChatUser = JSON.parse(localStorage.getItem('currentChatUser') || 'null');

            if (currentChatType === 'private' && currentChatUser) {
                // Send private message
                await this.sendPrivateMessage(message, currentChatUser.id);
            } else {
                // Send group message
                const newMessage = {
                    id: Date.now().toString(),
                    text: message,
                    userId: this.currentUser.id,
                    username: this.userData.username,
                    timestamp: new Date().toISOString(),
                    type: 'message'
                };

                console.log('Created message object:', newMessage);

                // Add to messages array
                this.messages.push(newMessage);
                localStorage.setItem('chatMessages', JSON.stringify(this.messages));

                // Add to UI
                this.addMessageToUI(newMessage);
                
                // Send notification to other users (simulated)
                this.sendNotification(message);
            }
            
            messageInput.value = '';
            this.messageCount++;
            this.updateMessageCount();
            this.stopTyping();

            console.log('Message sent successfully');

        } catch (error) {
            console.error('Error sending message:', error);
            this.showError('Помилка відправки повідомлення: ' + error.message);
        }
    }

    addMessageToUI(messageData) {
        try {
            const messagesArea = document.getElementById('messagesArea');
            if (!messagesArea) {
                console.error('Messages area not found');
                return;
            }

            console.log('Adding message to UI:', messageData);

            const messageDiv = document.createElement('div');
            const isOwnMessage = messageData.userId === this.currentUser.id;

            messageDiv.className = `message ${isOwnMessage ? 'own' : ''} animate__animated animate__fadeInUp`;
            messageDiv.innerHTML = `
                <div class="message-info">
                    <span class="message-username">${messageData.username || 'Невідомий користувач'}</span>
                    <span class="message-time">${this.formatTime(messageData.timestamp)}</span>
                </div>
                <div class="message-content">
                    ${this.formatMessage(messageData.text)}
                </div>
            `;

            messagesArea.appendChild(messageDiv);
            this.scrollToBottom();
            
            console.log('Message added to UI successfully');
        } catch (error) {
            console.error('Error adding message to UI:', error);
        }
    }

    formatMessage(text) {
        // Convert URLs to links
        text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="text-decoration-none">$1</a>');
        
        // Convert emoji shortcuts - escape special characters
        const emojiMap = {
            ':\\)': '😊', ':\\(': '😢', ':D': '😃', ';\\)': '😉',
            '<3': '❤️', ':P': '😛', ':O': '😮', ':\\|': '😐'
        };
        
        Object.keys(emojiMap).forEach(shortcut => {
            text = text.replace(new RegExp(shortcut, 'g'), emojiMap[shortcut]);
        });

        return text;
    }

    formatTime(timestamp) {
        if (!timestamp) return '';
        
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) { // Less than 1 minute
            return 'щойно';
        } else if (diff < 3600000) { // Less than 1 hour
            const minutes = Math.floor(diff / 60000);
            return `${minutes} хв тому`;
        } else {
            return date.toLocaleTimeString('uk-UA', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
        }
    }

    updateUsersList(filteredUsers = null) {
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = '';

        // Get users to display
        let usersToShow = filteredUsers || this.users.filter(user => user.isOnline);

        usersToShow.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user-item';
            
            // Don't show current user in the list
            if (user.id === this.currentUser.id) return;
            
            userDiv.innerHTML = `
                <div class="user-avatar">
                    ${user.username.charAt(0).toUpperCase()}
                </div>
                <div class="user-info">
                    <div class="user-name">${user.username}</div>
                    <small class="text-muted">${user.isOnline ? 'онлайн' : 'офлайн'}</small>
                </div>
                <div class="user-actions">
                    <button class="btn btn-sm btn-outline-primary" 
                            onclick="chatRoom.startPrivateChat('${user.id}')" 
                            title="Написати повідомлення">
                        <i class="fas fa-comment"></i>
                    </button>
                </div>
                <div class="user-status ${user.isOnline ? '' : 'offline'}"></div>
            `;
            usersList.appendChild(userDiv);
        });
    }

    updateOnlineCount() {
        try {
            const onlineUsers = this.users.filter(user => user.isOnline);
            const onlineCountElement = document.getElementById('onlineCount');
            if (onlineCountElement) {
                onlineCountElement.textContent = onlineUsers.length;
            }
        } catch (error) {
            console.error('Error updating online count:', error);
        }
    }

    updateMessageCount() {
        try {
            const messageCountElement = document.getElementById('messageCount');
            if (messageCountElement) {
                messageCountElement.textContent = this.messageCount;
            }
        } catch (error) {
            console.error('Error updating message count:', error);
        }
    }

    updateChatStartTime() {
        try {
            const timeString = this.chatStartTime.toLocaleTimeString('uk-UA', {
                hour: '2-digit',
                minute: '2-digit'
            });
            const chatStartTimeElement = document.getElementById('chatStartTime');
            if (chatStartTimeElement) {
                chatStartTimeElement.textContent = timeString;
            }
        } catch (error) {
            console.error('Error updating chat start time:', error);
        }
    }

    handleTyping(text) {
        if (text.length > 0) {
            this.startTyping();
        } else {
            this.stopTyping();
        }
    }

    async startTyping() {
        // Simulate typing indicator
        this.typingUsers.add(this.userData.username);
        this.updateTypingIndicator();
    }

    async stopTyping() {
        // Remove typing indicator
        this.typingUsers.delete(this.userData.username);
        this.updateTypingIndicator();
    }

    updateTypingIndicator() {
        try {
            const typingIndicator = document.getElementById('typingIndicator');
            if (!typingIndicator) return;
            
            if (this.typingUsers.size > 0) {
                const usernames = Array.from(this.typingUsers).join(', ');
                const typingText = typingIndicator.querySelector('.typing-text');
                if (typingText) {
                    typingText.textContent = `${usernames} друкує...`;
                }
                typingIndicator.style.display = 'flex';
            } else {
                typingIndicator.style.display = 'none';
            }
        } catch (error) {
            console.error('Error updating typing indicator:', error);
        }
    }

    setupEmojiPicker() {
        try {
            // Simple emoji picker without external library
            const emojiBtn = document.getElementById('emojiBtn');
            const messageInput = document.getElementById('messageInput');
            
            if (emojiBtn && messageInput) {
                const commonEmojis = ['😊', '😂', '❤️', '👍', '👎', '🎉', '🔥', '💯', '😎', '🤔', '😢', '😡', '😴', '🤗', '👋', '🎵', '⚡', '🌟', '💪', '🎯'];
                
                emojiBtn.addEventListener('click', () => {
                    const emoji = commonEmojis[Math.floor(Math.random() * commonEmojis.length)];
                    messageInput.value += emoji;
                    messageInput.focus();
                });
            }
        } catch (error) {
            console.error('Error setting up emoji picker:', error);
        }
    }

    toggleEmojiPicker() {
        try {
            // Simple emoji insertion
            const messageInput = document.getElementById('messageInput');
            if (messageInput) {
                const emoji = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '💯', '😎', '🤔', '😢'][Math.floor(Math.random() * 10)];
                messageInput.value += emoji;
                messageInput.focus();
            }
        } catch (error) {
            console.error('Error toggling emoji picker:', error);
        }
    }

    scrollToBottom() {
        try {
            const messagesArea = document.getElementById('messagesArea');
            if (messagesArea) {
                messagesArea.scrollTop = messagesArea.scrollHeight;
            }
        } catch (error) {
            console.error('Error scrolling to bottom:', error);
        }
    }

    handleScroll() {
        const messagesArea = document.getElementById('messagesArea');
        const isAtBottom = messagesArea.scrollTop + messagesArea.clientHeight >= messagesArea.scrollHeight - 10;
        
        // Auto-scroll if user is near bottom
        if (isAtBottom) {
            this.scrollToBottom();
        }
    }

    async setUserOnline() {
        const user = this.users.find(u => u.id === this.currentUser.id);
        if (user) {
            user.isOnline = true;
            user.lastSeen = new Date().toISOString();
            localStorage.setItem('chatUsers', JSON.stringify(this.users));
        }
    }

    async setUserOffline() {
        const user = this.users.find(u => u.id === this.currentUser.id);
        if (user) {
            user.isOnline = false;
            user.lastSeen = new Date().toISOString();
            localStorage.setItem('chatUsers', JSON.stringify(this.users));
        }
    }

    async sendNotification(message) {
        // Simulate notification to other users
        console.log(`Notification: ${this.userData.username} sent: ${message}`);
    }

    searchUser() {
        const searchTerm = document.getElementById('userSearchInput').value.trim().toLowerCase();
        
        if (!searchTerm) {
            this.updateUsersList();
            return;
        }

        const filteredUsers = this.users.filter(user => 
            user.username.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)
        );

        this.updateUsersList(filteredUsers);
        
        if (filteredUsers.length === 0) {
            this.showInfo('Користувача не знайдено');
        }
    }

    startPrivateChat(userId) {
        const targetUser = this.users.find(u => u.id === userId);
        if (!targetUser) {
            this.showError('Користувача не знайдено');
            return;
        }

        // Create private chat ID
        const chatId = [this.currentUser.id, userId].sort().join('_');
        
        // Store current chat info
        localStorage.setItem('currentChatId', chatId);
        localStorage.setItem('currentChatType', 'private');
        localStorage.setItem('currentChatUser', JSON.stringify(targetUser));

        // Update UI to show private chat
        this.showPrivateChat(targetUser);
        
        // Load private messages
        this.loadPrivateMessages(chatId);
    }

    showPrivateChat(targetUser) {
        // Update header to show private chat
        document.querySelector('.header-title').textContent = `Чат з ${targetUser.username}`;
        
        // Add back button
        const header = document.querySelector('.chat-header .col-md-6:first-child');
        if (!document.getElementById('backToGroupBtn')) {
            const backBtn = document.createElement('button');
            backBtn.id = 'backToGroupBtn';
            backBtn.className = 'btn btn-outline-light btn-sm me-3';
            backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Назад до групи';
            backBtn.onclick = () => this.backToGroupChat();
            header.appendChild(backBtn);
        }

        // Clear messages area
        document.getElementById('messagesArea').innerHTML = `
            <div class="message system-message">
                <div class="message-content">
                    <i class="fas fa-user me-2"></i>
                    Приватний чат з ${targetUser.username}
                </div>
            </div>
        `;
    }

    backToGroupChat() {
        // Remove private chat info
        localStorage.removeItem('currentChatId');
        localStorage.removeItem('currentChatType');
        localStorage.removeItem('currentChatUser');

        // Update header
        document.querySelector('.header-title').textContent = 'ChatApp';
        
        // Remove back button
        const backBtn = document.getElementById('backToGroupBtn');
        if (backBtn) backBtn.remove();

        // Load group messages
        this.loadMessages();
    }

    loadPrivateMessages(chatId) {
        const privateMessages = JSON.parse(localStorage.getItem(`privateMessages_${chatId}`)) || [];
        
        privateMessages.forEach(message => {
            this.addMessageToUI(message);
        });
        
        this.scrollToBottom();
    }

    async sendPrivateMessage(message, targetUserId) {
        const chatId = [this.currentUser.id, targetUserId].sort().join('_');
        const targetUser = this.users.find(u => u.id === targetUserId);
        
        const newMessage = {
            id: Date.now().toString(),
            text: message,
            userId: this.currentUser.id,
            username: this.userData.username,
            timestamp: new Date().toISOString(),
            type: 'private',
            targetUserId: targetUserId,
            chatId: chatId
        };

        // Get existing private messages
        const privateMessages = JSON.parse(localStorage.getItem(`privateMessages_${chatId}`)) || [];
        privateMessages.push(newMessage);
        localStorage.setItem(`privateMessages_${chatId}`, JSON.stringify(privateMessages));

        // Add to UI
        this.addMessageToUI(newMessage);
    }

    showInfo(message) {
        Swal.fire({
            title: 'Інформація',
            text: message,
            icon: 'info',
            timer: 2000,
            showConfirmButton: false
        });
    }

    async logout() {
        try {
            await this.setUserOffline();
            await this.stopTyping();
            
            if (this.updateInterval) {
                clearInterval(this.updateInterval);
            }
            
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Error during logout:', error);
            window.location.href = 'index.html';
        }
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
            timer: 2000,
            showConfirmButton: false
        });
    }

    switchToGroupChat() {
        // Clear private chat info
        localStorage.removeItem('currentChatId');
        localStorage.removeItem('currentChatType');
        localStorage.removeItem('currentChatUser');

        // Update header
        document.querySelector('.header-title').textContent = 'ChatApp';
        
        // Remove back button if exists
        const backBtn = document.getElementById('backToGroupBtn');
        if (backBtn) backBtn.remove();

        // Load group messages
        this.loadMessages();
        
        // Update user list to show all users
        this.updateUsersList();
        
        this.showInfo('Переключено на груповий чат');
    }

    switchToPrivateChat() {
        // Update header
        document.querySelector('.header-title').textContent = 'Приватні повідомлення';
        
        // Clear messages area
        document.getElementById('messagesArea').innerHTML = `
            <div class="message system-message">
                <div class="message-content">
                    <i class="fas fa-user me-2"></i>
                    Виберіть користувача для приватного спілкування
                </div>
            </div>
        `;
        
        // Update user list to show clickable users
        this.updateUsersListForPrivateChat();
        
        this.showInfo('Режим приватних повідомлень');
    }

    updateUsersListForPrivateChat() {
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = '';

        // Get all users except current user
        const otherUsers = this.users.filter(user => user.id !== this.currentUser.id);

        otherUsers.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user-item clickable-user';
            
            userDiv.innerHTML = `
                <div class="user-avatar">
                    ${user.username.charAt(0).toUpperCase()}
                </div>
                <div class="user-info">
                    <div class="user-name">${user.username}</div>
                    <small class="text-muted">${user.isOnline ? 'онлайн' : 'офлайн'}</small>
                </div>
                <div class="user-actions">
                    <button class="btn btn-sm btn-primary" 
                            onclick="chatRoom.startPrivateChat('${user.id}')" 
                            title="Написати повідомлення">
                        <i class="fas fa-comment"></i>
                    </button>
                </div>
                <div class="user-status ${user.isOnline ? '' : 'offline'}"></div>
            `;
            
            // Make entire user item clickable
            userDiv.addEventListener('click', (e) => {
                if (!e.target.closest('.user-actions')) {
                    this.startPrivateChat(user.id);
                }
            });
            
            usersList.appendChild(userDiv);
        });
    }
}

// Initialize the chat when DOM is loaded
let chatRoom;
document.addEventListener('DOMContentLoaded', async () => {
    try {
        chatRoom = new ChatRoom();
        await chatRoom.init();
    } catch (error) {
        console.error('Failed to initialize chat:', error);
        Swal.fire({
            title: 'Помилка!',
            text: 'Не вдалося ініціалізувати чат. Перезавантажте сторінку.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}); 
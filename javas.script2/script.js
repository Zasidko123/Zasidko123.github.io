class ExpenseTracker {
    constructor() {
        this.expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        this.chart = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setDateToToday();
        this.updateMonthFilter();
        this.renderExpenses();
        this.updateSummary();
        this.updateChart();
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('expenseForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addExpense();
        });

        // Filters
        document.getElementById('categoryFilter').addEventListener('change', () => {
            this.renderExpenses();
        });

        document.getElementById('monthFilter').addEventListener('change', () => {
            this.renderExpenses();
        });

        // Buttons
        document.getElementById('clearAll').addEventListener('click', () => {
            this.clearAllExpenses();
        });

        document.getElementById('exportData').addEventListener('click', () => {
            this.exportData();
        });
    }

    setDateToToday() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').value = today;
    }

    addExpense() {
        const form = document.getElementById('expenseForm');
        const formData = new FormData(form);
        
        const expense = {
            id: Date.now(),
            description: formData.get('description'),
            amount: parseFloat(formData.get('amount')),
            category: formData.get('category'),
            date: formData.get('date')
        };

        this.expenses.push(expense);
        this.saveToLocalStorage();
        this.renderExpenses();
        this.updateSummary();
        this.updateChart();
        this.updateMonthFilter();
        
        // Reset form
        form.reset();
        this.setDateToToday();
        
        // Show success message
        this.showNotification('Expense added successfully!', 'success');
    }

    deleteExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.saveToLocalStorage();
        this.renderExpenses();
        this.updateSummary();
        this.updateChart();
        this.showNotification('Expense deleted successfully!', 'success');
    }

    clearAllExpenses() {
        if (confirm('Are you sure you want to delete all expenses? This action cannot be undone.')) {
            this.expenses = [];
            this.saveToLocalStorage();
            this.renderExpenses();
            this.updateSummary();
            this.updateChart();
            this.showNotification('All expenses cleared!', 'success');
        }
    }

    getFilteredExpenses() {
        let filtered = [...this.expenses];
        
        const categoryFilter = document.getElementById('categoryFilter').value;
        const monthFilter = document.getElementById('monthFilter').value;
        
        if (categoryFilter) {
            filtered = filtered.filter(expense => expense.category === categoryFilter);
        }
        
        if (monthFilter) {
            filtered = filtered.filter(expense => {
                const expenseMonth = expense.date.substring(0, 7); // YYYY-MM
                return expenseMonth === monthFilter;
            });
        }
        
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    renderExpenses() {
        const container = document.getElementById('expensesContainer');
        const filteredExpenses = this.getFilteredExpenses();
        
        if (filteredExpenses.length === 0) {
            container.innerHTML = '<p class="no-expenses">No expenses found. Add your first expense above!</p>';
            return;
        }
        
        container.innerHTML = filteredExpenses.map(expense => this.createExpenseHTML(expense)).join('');
        
        // Add delete event listeners
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.deleteExpense(id);
            });
        });
    }

    createExpenseHTML(expense) {
        const categoryEmojis = {
            food: '🍽️',
            transport: '🚗',
            entertainment: '🎬',
            shopping: '🛍️',
            bills: '📄',
            health: '🏥',
            education: '📚',
            other: '📦'
        };
        
        const categoryNames = {
            food: 'Food',
            transport: 'Transport',
            entertainment: 'Entertainment',
            shopping: 'Shopping',
            bills: 'Bills',
            health: 'Health',
            education: 'Education',
            other: 'Other'
        };
        
        return `
            <div class="expense-item">
                <div class="expense-info">
                    <div class="expense-description">${expense.description}</div>
                    <div class="expense-category">${categoryEmojis[expense.category]} ${categoryNames[expense.category]}</div>
                </div>
                <div class="expense-date">${this.formatDate(expense.date)}</div>
                <div class="expense-amount">$${expense.amount.toFixed(2)}</div>
                <button class="delete-btn" data-id="${expense.id}">Delete</button>
            </div>
        `;
    }

    updateSummary() {
        const totalExpenses = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
        const currentMonth = new Date().toISOString().substring(0, 7);
        const monthlyExpenses = this.expenses
            .filter(expense => expense.date.startsWith(currentMonth))
            .reduce((sum, expense) => sum + expense.amount, 0);
        
        document.getElementById('totalExpenses').textContent = `$${totalExpenses.toFixed(2)}`;
        document.getElementById('monthlyExpenses').textContent = `$${monthlyExpenses.toFixed(2)}`;
        document.getElementById('totalRecords').textContent = this.expenses.length;
    }

    updateMonthFilter() {
        const monthFilter = document.getElementById('monthFilter');
        const months = [...new Set(this.expenses.map(expense => expense.date.substring(0, 7)))].sort().reverse();
        
        // Keep the first option (All Months)
        monthFilter.innerHTML = '<option value="">All Months</option>';
        
        months.forEach(month => {
            const option = document.createElement('option');
            option.value = month;
            option.textContent = this.formatMonth(month);
            monthFilter.appendChild(option);
        });
    }

    updateChart() {
        const ctx = document.getElementById('expensesChart').getContext('2d');
        
        // Destroy existing chart if it exists
        if (this.chart) {
            this.chart.destroy();
        }
        
        const chartData = this.getChartData();
        
        this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: chartData.labels,
                datasets: [{
                    data: chartData.data,
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40',
                        '#FF6384',
                        '#C9CBCF'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: $${value.toFixed(2)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    getChartData() {
        const categoryTotals = {};
        
        this.expenses.forEach(expense => {
            if (categoryTotals[expense.category]) {
                categoryTotals[expense.category] += expense.amount;
            } else {
                categoryTotals[expense.category] = expense.amount;
            }
        });
        
        const categoryNames = {
            food: 'Food',
            transport: 'Transport',
            entertainment: 'Entertainment',
            shopping: 'Shopping',
            bills: 'Bills',
            health: 'Health',
            education: 'Education',
            other: 'Other'
        };
        
        return {
            labels: Object.keys(categoryTotals).map(category => categoryNames[category]),
            data: Object.values(categoryTotals)
        };
    }

    exportData() {
        const dataStr = JSON.stringify(this.expenses, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `expenses_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        this.showNotification('Data exported successfully!', 'success');
    }

    saveToLocalStorage() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    formatMonth(monthString) {
        const date = new Date(monthString + '-01');
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            background: ${type === 'success' ? '#28a745' : '#17a2b8'};
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ExpenseTracker();
}); 
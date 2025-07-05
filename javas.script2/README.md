# 🧮 Expense Tracker

A modern, responsive web application for tracking personal expenses with data visualization and local storage.

## Features

### ✅ Core Functionality
- **Add/Remove Expenses**: Easy form to add new expenses with description, amount, category, and date
- **Category Filtering**: Filter expenses by category (Food, Transport, Entertainment, etc.)
- **Monthly Filtering**: Filter expenses by specific months
- **Data Persistence**: All data is saved in localStorage
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 📊 Data Visualization
- **Interactive Chart**: Beautiful doughnut chart using Chart.js showing expense distribution by category
- **Real-time Updates**: Chart updates automatically when expenses are added or removed
- **Percentage Display**: Shows percentage breakdown in chart tooltips

### 📈 Summary Statistics
- **Total Expenses**: Sum of all recorded expenses
- **Monthly Expenses**: Current month's total spending
- **Record Count**: Total number of expense entries

### 🛠️ Additional Features
- **Export Data**: Download all expense data as JSON file
- **Clear All**: Option to delete all expenses with confirmation
- **Notifications**: Success messages for user actions
- **Date Auto-fill**: Automatically sets today's date in the form

## Categories

The app includes 8 expense categories with emojis:
- 🍽️ Food
- 🚗 Transport
- 🎬 Entertainment
- 🛍️ Shopping
- 📄 Bills
- 🏥 Health
- 📚 Education
- 📦 Other

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Class-based architecture with modern features
- **Chart.js**: Interactive data visualization
- **LocalStorage**: Client-side data persistence

## File Structure

```
javas.script2/
├── index.html      # Main HTML file
├── style.css       # CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Usage

1. Open `index.html` in a web browser
2. Fill out the expense form with:
   - Description (e.g., "Groceries")
   - Amount (e.g., 25.50)
   - Category (select from dropdown)
   - Date (auto-filled with today)
3. Click "Add Expense" to save
4. Use filters to view specific categories or months
5. View the chart to see spending distribution
6. Export data or clear all expenses as needed

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Local Storage

The app uses browser localStorage to persist data. Data is automatically saved and restored when you reload the page.

## Future Enhancements

Potential features for future versions:
- Multiple currency support
- Budget limits and alerts
- Expense trends and analytics
- Cloud sync
- Receipt image upload
- Export to CSV/Excel
- Dark mode toggle 
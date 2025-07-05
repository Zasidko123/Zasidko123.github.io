class WeatherApp {
    constructor() {
        // Replace this with your actual OpenWeatherMap API key
        // Get free API key at: https://openweathermap.org/api
        this.apiKey = 'YOUR_ACTUAL_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
        this.geocodingUrl = 'https://api.openweathermap.org/geo/1.0';
        this.currentUnit = 'celsius';
        this.currentData = null;
        this.demoMode = false;
        this.popularCities = [
            { name: 'Київ', country: 'UA', display: 'Київ, Україна' },
            { name: 'Львів', country: 'UA', display: 'Львів, Україна' },
            { name: 'Харків', country: 'UA', display: 'Харків, Україна' },
            { name: 'Одеса', country: 'UA', display: 'Одеса, Україна' },
            { name: 'Дніпро', country: 'UA', display: 'Дніпро, Україна' },
            { name: 'London', country: 'GB', display: 'London, UK' },
            { name: 'New York', country: 'US', display: 'New York, USA' },
            { name: 'Paris', country: 'FR', display: 'Paris, France' },
            { name: 'Tokyo', country: 'JP', display: 'Tokyo, Japan' },
            { name: 'Sydney', country: 'AU', display: 'Sydney, Australia' }
        ];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupPopularCities();
        this.setupAutocomplete();
        this.checkGeolocation();
        this.checkApiKey();
    }

    checkApiKey() {
        if (this.apiKey === 'YOUR_API_KEY' || this.apiKey === '1234567890abcdef' || this.apiKey === 'YOUR_ACTUAL_API_KEY_HERE') {
            this.demoMode = true;
            this.showSweetAlert('Демо режим', 'Для отримання реальних даних про погоду замініть API ключ на справжній. Отримайте безкоштовний ключ на openweathermap.org', 'warning');
        }
    }

    setupEventListeners() {
        // Search form
        document.getElementById('searchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.searchWeather();
        });

        // Location button
        document.getElementById('locationBtn').addEventListener('click', () => {
            this.getCurrentLocation();
        });

        // Temperature unit buttons
        document.getElementById('celsiusBtn').addEventListener('click', () => {
            this.changeUnit('celsius');
        });

        document.getElementById('fahrenheitBtn').addEventListener('click', () => {
            this.changeUnit('fahrenheit');
        });

        // City input for autocomplete
        const cityInput = document.getElementById('cityInput');
        cityInput.addEventListener('input', (e) => {
            this.handleCityInput(e.target.value);
        });

        cityInput.addEventListener('focus', () => {
            this.showAutocomplete();
        });

        // Hide autocomplete when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideAutocomplete();
            }
        });
    }

    setupPopularCities() {
        const container = document.getElementById('popularCities');
        if (!container) return;

        container.innerHTML = this.popularCities.map(city => `
            <button class="btn btn-outline-primary btn-sm m-1" onclick="weatherApp.searchCityByName('${city.name}', '${city.country}')">
                <i class="fas fa-map-marker-alt me-1"></i>${city.display}
            </button>
        `).join('');
    }

    setupAutocomplete() {
        // Create autocomplete container
        const searchContainer = document.querySelector('.search-container');
        if (!searchContainer) return;

        const autocompleteDiv = document.createElement('div');
        autocompleteDiv.id = 'autocompleteContainer';
        autocompleteDiv.className = 'autocomplete-container';
        autocompleteDiv.style.display = 'none';
        
        searchContainer.appendChild(autocompleteDiv);
    }

    async handleCityInput(value) {
        if (value.length < 2) {
            this.hideAutocomplete();
            return;
        }

        if (this.demoMode) {
            // Show demo suggestions
            const demoCities = this.popularCities.filter(city => 
                city.name.toLowerCase().includes(value.toLowerCase()) ||
                city.display.toLowerCase().includes(value.toLowerCase())
            );
            this.showAutocompleteResults(demoCities);
            return;
        }

        try {
            const cities = await this.searchCities(value);
            this.showAutocompleteResults(cities);
        } catch (error) {
            console.error('Error searching cities:', error);
            // Fallback to demo cities
            const demoCities = this.popularCities.filter(city => 
                city.name.toLowerCase().includes(value.toLowerCase()) ||
                city.display.toLowerCase().includes(value.toLowerCase())
            );
            this.showAutocompleteResults(demoCities);
        }
    }

    async searchCities(query) {
        const url = `${this.geocodingUrl}/direct?q=${encodeURIComponent(query)}&limit=5&appid=${this.apiKey}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Failed to search cities');
        }

        const cities = await response.json();
        return cities.map(city => ({
            name: city.name,
            country: city.country,
            state: city.state,
            display: this.formatCityDisplay(city)
        }));
    }

    formatCityDisplay(city) {
        let display = city.name;
        if (city.state) {
            display += `, ${city.state}`;
        }
        display += `, ${city.country}`;
        return display;
    }

    showAutocompleteResults(cities) {
        const container = document.getElementById('autocompleteContainer');
        if (!container) return;

        if (cities.length === 0) {
            container.style.display = 'none';
            return;
        }

        container.innerHTML = cities.map(city => `
            <div class="autocomplete-item" onclick="weatherApp.selectCity('${city.name}', '${city.country}')">
                <i class="fas fa-map-marker-alt me-2"></i>
                ${city.display}
            </div>
        `).join('');

        container.style.display = 'block';
    }

    selectCity(cityName, country) {
        document.getElementById('cityInput').value = cityName;
        this.hideAutocomplete();
        this.searchWeather();
        
        // Показуємо повідомлення про вибране місто
        this.showSweetAlert('Місто вибрано!', `Пошук погоди для: ${cityName}`, 'info');
    }

    async searchCityByName(cityName, country) {
        document.getElementById('cityInput').value = cityName;
        this.searchWeather();
        
        // Показуємо повідомлення про вибране популярне місто
        this.showSweetAlert('Популярне місто!', `Пошук погоди для: ${cityName}`, 'info');
    }

    showAutocomplete() {
        const container = document.getElementById('autocompleteContainer');
        if (container && container.children.length > 0) {
            container.style.display = 'block';
        }
    }

    hideAutocomplete() {
        const container = document.getElementById('autocompleteContainer');
        if (container) {
            container.style.display = 'none';
        }
    }

    async searchWeather() {
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value.trim();

        if (!city) {
            this.showSweetAlert('Помилка', 'Будь ласка, введіть назву міста', 'error');
            return;
        }

        this.showLoading(true);
        this.hideAutocomplete();
        
        try {
            if (this.demoMode) {
                await this.fetchDemoWeatherData(city);
            } else {
                await this.fetchWeatherData(city);
            }
        } catch (error) {
            console.error('Weather fetch error:', error);
            if (this.demoMode) {
                this.showError('Демо режим: Спробуйте одне з популярних міст (Київ, Львів, Лондон, тощо)');
            } else {
                this.showError('Місто не знайдено. Перевірте правильність написання та спробуйте ще раз.');
            }
        } finally {
            this.showLoading(false);
        }
    }

    async fetchDemoWeatherData(city) {
        // Demo weather data for testing
        const demoData = {
            current: {
                name: city,
                sys: { country: 'UA' },
                main: {
                    temp: 22,
                    feels_like: 24,
                    humidity: 65,
                    pressure: 1013
                },
                weather: [{ id: 800, main: 'Clear', description: 'ясно' }],
                wind: { speed: 3.5 },
                visibility: 10000
            },
            forecast: {
                list: [
                    { dt: Date.now() / 1000 + 86400, main: { temp: 23 }, weather: [{ id: 800, description: 'ясно' }] },
                    { dt: Date.now() / 1000 + 172800, main: { temp: 21 }, weather: [{ id: 801, description: 'хмарно' }] },
                    { dt: Date.now() / 1000 + 259200, main: { temp: 19 }, weather: [{ id: 500, description: 'дощ' }] },
                    { dt: Date.now() / 1000 + 345600, main: { temp: 20 }, weather: [{ id: 800, description: 'ясно' }] },
                    { dt: Date.now() / 1000 + 432000, main: { temp: 22 }, weather: [{ id: 801, description: 'хмарно' }] }
                ]
            }
        };

        // Заповнюємо поле пошуку назвою міста
        document.getElementById('cityInput').value = city;

        this.currentData = demoData;
        this.displayWeather();
    }

    async getCurrentLocation() {
        if (!navigator.geolocation) {
            this.showSweetAlert('Помилка', 'Геолокація не підтримується вашим браузером', 'error');
            return;
        }

        this.showLoading(true);
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    // Спочатку отримуємо назву міста за координатами
                    const cityName = await this.getCityNameFromCoords(latitude, longitude);
                    
                    // Заповнюємо поле пошуку назвою міста
                    if (cityName) {
                        document.getElementById('cityInput').value = cityName;
                        this.showSweetAlert('Місцезнаходження знайдено!', `Ваше місто: ${cityName}`, 'success');
                    }
                    
                    // Отримуємо погоду за координатами
                    await this.fetchWeatherDataByCoords(latitude, longitude);
                } catch (error) {
                    console.error('Location error:', error);
                    this.showError('Не вдалося отримати дані про погоду для вашого місцезнаходження.');
                } finally {
                    this.showLoading(false);
                }
            },
            (error) => {
                this.showLoading(false);
                let errorMessage = 'Не вдалося отримати ваше місцезнаходження.';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'Доступ до місцезнаходження відхилено. Будь ласка, дозвольте доступ до місцезнаходження.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Інформація про місцезнаходження недоступна.';
                        break;
                    case error.TIMEOUT:
                        errorMessage = 'Запит на місцезнаходження закінчився таймаутом.';
                        break;
                }
                this.showSweetAlert('Помилка місцезнаходження', errorMessage, 'error');
            }
        );
    }

    async getCityNameFromCoords(lat, lon) {
        try {
            if (this.demoMode) {
                // Для демо режиму повертаємо приклад міста
                return 'Київ';
            }

            const url = `${this.geocodingUrl}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${this.apiKey}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Failed to get city name');
            }

            const data = await response.json();
            
            if (data && data.length > 0) {
                const city = data[0];
                // Формуємо назву міста з міста та країни
                let cityName = city.name;
                if (city.state) {
                    cityName += `, ${city.state}`;
                }
                return cityName;
            }
            
            return null;
        } catch (error) {
            console.error('Error getting city name:', error);
            return null;
        }
    }

    async fetchWeatherData(city) {
        const currentWeatherUrl = `${this.baseUrl}/weather?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric&lang=uk`;
        const forecastUrl = `${this.baseUrl}/forecast?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric&lang=uk`;

        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('City not found');
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        this.currentData = { current: currentData, forecast: forecastData };
        this.displayWeather();
    }

    async fetchWeatherDataByCoords(lat, lon) {
        const currentWeatherUrl = `${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=uk`;
        const forecastUrl = `${this.baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=uk`;

        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('Unable to fetch weather data');
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        // Заповнюємо поле пошуку назвою міста з отриманих даних
        if (currentData && currentData.name) {
            document.getElementById('cityInput').value = currentData.name;
        }

        this.currentData = { current: currentData, forecast: forecastData };
        this.displayWeather();
    }

    displayWeather() {
        if (!this.currentData) return;

        const { current, forecast } = this.currentData;
        
        // Update current weather
        this.updateCurrentWeather(current);
        
        // Update forecast
        this.updateForecast(forecast);
        
        // Update background
        this.updateBackground(current.weather[0].main, current.weather[0].description);
        
        // Show sections
        document.getElementById('currentWeatherSection').style.display = 'block';
        document.getElementById('forecastSection').style.display = 'block';
        
        // Hide error message if it was showing
        document.getElementById('errorMessage').style.display = 'none';
        
        // Show success message
        this.showSweetAlert('Успішно!', `Дані про погоду завантажено для ${current.name}`, 'success');
    }

    updateCurrentWeather(data) {
        const temp = this.convertTemperature(data.main.temp);
        const feelsLike = this.convertTemperature(data.main.feels_like);
        
        document.getElementById('cityName').textContent = data.name + ', ' + data.sys.country;
        document.getElementById('temperature').textContent = `${temp}°${this.currentUnit === 'celsius' ? 'C' : 'F'}`;
        document.getElementById('weatherDescription').textContent = data.weather[0].description;
        document.getElementById('feelsLike').textContent = `Відчувається як: ${feelsLike}°${this.currentUnit === 'celsius' ? 'C' : 'F'}`;
        document.getElementById('humidity').textContent = `Вологість: ${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `Вітер: ${Math.round(data.wind.speed * 3.6)} км/год`;
        document.getElementById('visibility').textContent = `Видимість: ${(data.visibility / 1000).toFixed(1)} км`;
        document.getElementById('pressure').textContent = `Тиск: ${data.main.pressure} гПа`;
        
        // Update weather icon
        const weatherIcon = document.getElementById('weatherIcon');
        weatherIcon.className = `fas ${this.getWeatherIcon(data.weather[0].id)} fa-4x`;
        weatherIcon.style.color = this.getWeatherIconColor(data.weather[0].id);
    }

    updateForecast(data) {
        const container = document.getElementById('forecastContainer');
        const dailyData = this.processForecastData(data.list);
        
        container.innerHTML = dailyData.map(day => `
            <div class="col-md-2 col-sm-4 col-6">
                <div class="forecast-card animate__animated animate__fadeInUp">
                    <div class="forecast-date">${this.formatDate(day.date)}</div>
                    <div class="forecast-icon">
                        <i class="fas ${this.getWeatherIcon(day.weatherId)}" style="color: ${this.getWeatherIconColor(day.weatherId)}"></i>
                    </div>
                    <div class="forecast-temp">
                        ${this.convertTemperature(day.temp)}°${this.currentUnit === 'celsius' ? 'C' : 'F'}
                    </div>
                    <div class="forecast-description">${day.description}</div>
                </div>
            </div>
        `).join('');
    }

    processForecastData(list) {
        const dailyData = [];
        const seenDates = new Set();
        
        list.forEach(item => {
            const date = new Date(item.dt * 1000);
            const dateStr = date.toDateString();
            
            if (!seenDates.has(dateStr) && dailyData.length < 5) {
                seenDates.add(dateStr);
                dailyData.push({
                    date: date,
                    temp: item.main.temp,
                    weatherId: item.weather[0].id,
                    description: item.weather[0].description
                });
            }
        });
        
        return dailyData;
    }

    updateBackground(weatherMain, description) {
        const bgElement = document.getElementById('weather-bg');
        let bgClass = 'sunny';
        
        const weatherLower = description.toLowerCase();
        
        if (weatherLower.includes('rain') || weatherLower.includes('drizzle')) {
            bgClass = 'rainy';
        } else if (weatherLower.includes('snow')) {
            bgClass = 'snowy';
        } else if (weatherLower.includes('cloud')) {
            bgClass = 'cloudy';
        } else if (weatherLower.includes('thunder') || weatherLower.includes('storm')) {
            bgClass = 'stormy';
        } else if (weatherLower.includes('night') || this.isNightTime()) {
            bgClass = 'night';
        }
        
        bgElement.className = `weather-bg ${bgClass}`;
    }

    isNightTime() {
        const hour = new Date().getHours();
        return hour < 6 || hour > 18;
    }

    getWeatherIcon(weatherId) {
        if (weatherId >= 200 && weatherId < 300) return 'fa-bolt';
        if (weatherId >= 300 && weatherId < 400) return 'fa-cloud-rain';
        if (weatherId >= 500 && weatherId < 600) return 'fa-cloud-showers-heavy';
        if (weatherId >= 600 && weatherId < 700) return 'fa-snowflake';
        if (weatherId >= 700 && weatherId < 800) return 'fa-smog';
        if (weatherId === 800) return 'fa-sun';
        if (weatherId >= 801 && weatherId < 900) return 'fa-cloud';
        return 'fa-cloud';
    }

    getWeatherIconColor(weatherId) {
        if (weatherId >= 200 && weatherId < 300) return '#ffd700';
        if (weatherId >= 300 && weatherId < 600) return '#4a90e2';
        if (weatherId >= 600 && weatherId < 700) return '#ffffff';
        if (weatherId >= 700 && weatherId < 800) return '#8b4513';
        if (weatherId === 800) return '#ffd700';
        if (weatherId >= 801 && weatherId < 900) return '#87ceeb';
        return '#87ceeb';
    }

    convertTemperature(temp) {
        if (this.currentUnit === 'fahrenheit') {
            return Math.round((temp * 9/5) + 32);
        }
        return Math.round(temp);
    }

    changeUnit(unit) {
        this.currentUnit = unit;
        
        // Update button states
        document.getElementById('celsiusBtn').classList.toggle('active', unit === 'celsius');
        document.getElementById('fahrenheitBtn').classList.toggle('active', unit === 'fahrenheit');
        
        // Update display if we have data
        if (this.currentData) {
            this.updateCurrentWeather(this.currentData.current);
            this.updateForecast(this.currentData.forecast);
        }
    }

    formatDate(date) {
        return date.toLocaleDateString('uk-UA', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    }

    showLoading(show) {
        document.getElementById('loadingSpinner').style.display = show ? 'block' : 'none';
    }

    showError(message) {
        document.getElementById('errorText').textContent = message;
        document.getElementById('errorMessage').style.display = 'block';
    }

    showSweetAlert(title, text, icon) {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
    }

    checkGeolocation() {
        // Show welcome message
        this.showSweetAlert('Ласкаво просимо!', 'Введіть назву міста або використайте ваше місцезнаходження для отримання інформації про погоду', 'info');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.weatherApp = new WeatherApp();
    
    // Add Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}); 
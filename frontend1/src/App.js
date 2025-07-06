import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <p>Welcome to my React.js project!</p>
        <div className="weather-card">
          <h2>Current Weather</h2>
          <div className="weather-info">
            <div className="temperature">22°C</div>
            <div className="condition">Partly Cloudy</div>
            <div className="location">Kyiv, Ukraine</div>
          </div>
        </div>
        <div className="features">
          <h3>Features:</h3>
          <ul>
            <li>React.js Framework</li>
            <li>Modern UI Design</li>
            <li>Responsive Layout</li>
            <li>Weather Information</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App; 
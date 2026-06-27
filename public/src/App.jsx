import { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  const [city, setCity] = useState('London');
  const { weather, forecast, loading, error } = useWeather(city);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app-container">
      <h1>🌤️ Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="status-text">Loading weather data...</p>}
      {error && <p className="status-text error-text">{error}</p>}

      {weather && <WeatherCard data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;

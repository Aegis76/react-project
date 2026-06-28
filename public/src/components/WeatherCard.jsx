import './WeatherCard.css';

export default function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{name}</h2>
        <p className="weather-desc">{weather[0].description}</p>
      </div>
      <div className="weather-body">
        <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
        <div className="temperature">{Math.round(main.temp)}°C</div>
      </div>
      <div className="weather-details">
        <span>💧 Humidity: {main.humidity}%</span>
        <span>💨 Wind: {wind.speed} m/s</span>
        <span>🌡️ Feels like: {Math.round(main.feels_like)}°C</span>
      </div>
    </div>
  );
}

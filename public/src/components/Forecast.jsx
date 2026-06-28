import './Forecast.css';

export default function Forecast({ data }) {
  // Filter the list to get one forecast per day (at 12:00 PM)
  const dailyForecasts = data.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  );

  // If API doesn't return exactly 5 days, just take the first 5
  const forecastDays = dailyForecasts.slice(0, 5);

  return (
    <div className="forecast-container">
      <h3>📅 5-Day Forecast</h3>
      <div className="forecast-list">
        {forecastDays.map((day) => {
          const date = new Date(day.dt_txt);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

          return (
            <div className="forecast-item" key={day.dt}>
              <p className="forecast-day">{dayName}</p>
              <img src={iconUrl} alt={day.weather[0].description} />
              <p className="forecast-temp">{Math.round(day.main.temp)}°C</p>
              <p className="forecast-desc">{day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

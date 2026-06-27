import { useState, useEffect } from 'react';

const API_KEY = 'YOUR_API_KEY'; // <-- Paste your API key here!
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      setLoading(true);
      setError('');
      
      try {
        // 1. Fetch Current Weather
        const weatherRes = await fetch(
          `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!weatherRes.ok) throw new Error('City not found. Please check the name.');
        const weatherData = await weatherRes.json();
        setWeather(weatherData);

        // 2. Fetch 5-Day Forecast (3-hour intervals)
        const forecastRes = await fetch(
          `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!forecastRes.ok) throw new Error('Forecast data unavailable.');
        const forecastData = await forecastRes.json();
        setForecast(forecastData);

      } catch (err) {
        setError(err.message);
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { weather, forecast, loading, error };
};

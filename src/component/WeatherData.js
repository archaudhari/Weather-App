import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherData = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios(
        `http://api.openweathermap.org/data/2.5/weather?q=San+Francisco&appid=YOUR_API_KEY`
      );
      setWeather(result.data);
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {weather.main ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°F</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherData;

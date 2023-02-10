import React, { useState } from 'react';
// import WeatherData from './src/co';

const App = () => {
  const [city, setCity] = useState('San Francisco');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.elements.city.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Enter a city" />
        <button type="submit">Get Weather</button>
      </form>
      <WeatherData city={city} />
    </div>
  );
};

export default App;

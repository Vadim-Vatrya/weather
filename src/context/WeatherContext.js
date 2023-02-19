import { createContext, useState } from 'react';

const WeatherContext = createContext({});

const WeatherProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [coords, setCoords] = useState({ lat: '', lng: '' });
  const [weather, setWeather] = useState({});
  const [bgImg, setBgImg] = useState('');

  const weatherValue = {
    coords,
    setCoords,
    searchTerm,
    setSearchTerm,
    weather,
    setWeather,
    bgImg,
    setBgImg,
  };

  return (
    <WeatherContext.Provider value={weatherValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };

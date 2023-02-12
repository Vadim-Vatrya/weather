import { useState, useEffect } from 'react';
import './components/styles.css';

import Weather from './components/weather';

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const API_URL = 'https://api.openweathermap.org/data/2.5';
  const API_KEY = 'eb63035653337f135a8d54653000316a';

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      console.log(lat, long);

      await fetch(
        `${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`,
      )
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  // console.log(lat, long, data);

  return (
    <div className="App">
      {typeof data.main != 'undefined' ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;

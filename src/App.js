import { useState, useEffect } from 'react';
import './App.css';

import Weather from './components/weather';

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `'https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=eb63035653337f135a8d54653000316a'`,
      )
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log(result);
        });
    };

    console.log('Latitude is:', lat);
    console.log('Longitude is:', long);
    fetchData();
  }, [lat, long]);
  return (
    <div className="App">
      {/* {typeof data.main != 'undefined' ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )} */}
    </div>
  );
};

export default App;

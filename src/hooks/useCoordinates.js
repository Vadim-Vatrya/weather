import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const useCoordinates = () => {
  const { setCoords } = useContext(WeatherContext);

  const findCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        positionError => {
          setCoords({ lat: '46.65581', lng: '32.6178' });
          console.log(positionError);
        },
        {
          enableHighAccuracy: true,
          timeout: 4000,
          maximumAge: 0,
        },
      );
    } else {
      console.log('Location search is not supported by this browser.');
    }
  };

  return findCoordinates;
};

export default useCoordinates;

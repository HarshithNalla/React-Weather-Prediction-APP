import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 25,
    tempMin: 22,
    tempMax: 28,
    humidity: 50,
    feelsLike: 24,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

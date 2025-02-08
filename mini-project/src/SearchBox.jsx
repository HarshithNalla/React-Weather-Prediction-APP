import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "164e343e933b9b196c68755cd0dc5fb4";

  const getweatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      let jsonresponse = await response.json();

      let result = {
        city,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelsLike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };

      return result; // Return the result
    } catch (error) {
      throw error; // Corrected the variable name
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newInfo = await getweatherInfo();
      updateInfo(newInfo); // Pass fetched info to the parent component
      setCity(""); // Clear input field
      setError(false); // Reset error state
    } catch (error) {
      setError(true); // Show error message
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="filled"
          required
          value={city}
          onChange={handleCityChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
}

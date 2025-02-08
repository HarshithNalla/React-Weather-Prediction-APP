import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const imageSrc =
        info.humidity > 80
            ? "/images/rain.jpg"           // Image for high humidity
            : info.temp > 15
            ? "/images/sun.jpg"            // Image for hot temperature
            : "/images/fog.jpg";
    const cityname=info.humidity > 80? <ThunderstormIcon/>           // Image for high humidity
    : info.temp > 15
    ? <WbSunnyIcon/>            // Image for hot temperature
    : <AcUnitIcon/>;
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image= {imageSrc}// Update this path to your actual image file "/images/fog.jpg"
            title="Weather Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                cityname
              }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div>Temperature: {info.temp}°C</div>
              <div>Min Temp: {info.tempMin}°C</div>
              <div>Max Temp: {info.tempMax}°C</div>
              <div>Humidity: {info.humidity}%</div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels
                like: {info.feelsLike}°C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

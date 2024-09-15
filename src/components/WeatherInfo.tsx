
import '../assets/styles/components/WeatherInfo.scss';

interface WeatherInfoProps {
  city: string;
  max: number;
  min: number;
  description: string;
  currentTemp: number;
  icon: string;
};

export function WeatherInfo ({ city, max, min, description, currentTemp, icon }: WeatherInfoProps) {
  
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <section className="weather-info-container">
      <h1>{city}</h1>
      <h1>{Math.round(currentTemp)}°</h1>
      <img src={iconUrl} alt="Weather icon" />
      <p>{description}</p>
      <div className="max-min-container">
        <span>Min: {Math.round(min)}°</span> - <span>Max: {Math.round(max)}°</span>
      </div>
    </section>
  )
}

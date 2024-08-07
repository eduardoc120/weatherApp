
import '../assets/styles/components/WeatherInfo.css';

import PropTypes from 'prop-types';

export function WeatherInfo ({ city, max, min, description, currentTemp, icon }) {
  
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <section className="weather-info-container">
      <h1>{city}</h1>
      <h1>{Math.round(parseFloat(currentTemp))}°</h1>
      <img src={iconUrl} alt="Weather icon" />
      <p>{description}</p>
      <div className="max-min-container">
        <span>Min: {Math.round(parseFloat(min))}°</span> - <span>Max: {Math.round(parseFloat(max))}°</span>
      </div>
    </section>
  )
}

WeatherInfo.propTypes = {
  city: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};


import '../assets/styles/components/DayCard.css';

import PropTypes from 'prop-types';

export function DayCard({ dt, min, max, weather, lang }) {

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const date = new Date(dt * 1000);
  const dayName = date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', { weekday: 'long' });
  const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

  return (
    <div className="day-card">
      <div>{capitalizedDayName}</div>
      <img src={iconUrl} alt="Weather Icon" />
      <div>Min: {Math.round(parseFloat(min))}° - Max: {Math.round(parseFloat(max))}°</div>
    </div>
  );
}

DayCard.propTypes = {
  dt: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      main: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  )
}

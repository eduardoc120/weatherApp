import "../assets/styles/components/HourCard.css";

import PropTypes from "prop-types";

export function HourCard({ dt, temp, weather, lang }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const date = new Date(dt * 1000);
  const hour = date.toLocaleTimeString(lang === "en" ? "en-US" : "es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="hour-card">
      <div>{hour}</div>
      <img src={iconUrl} alt="Weather icon" />
      <div>{Math.round(parseFloat(temp))}°</div>
    </div>
  );
}

HourCard.propTypes = {
  dt: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      main: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

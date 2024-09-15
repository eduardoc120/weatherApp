import "../assets/styles/components/HourCard.scss";

import { Weather, Lang } from '../types';

interface HourCardProps {
  dt: number;
  temp: number;
  lang: Lang;
  weather: Weather[];
}

export function HourCard({ dt, temp, weather, lang }: HourCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const date = new Date(dt * 1000);
  const hour = date.toLocaleTimeString(lang.code === "en" ? "en-US" : "es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="hour-card">
      <div>{hour}</div>
      <img src={iconUrl} alt="Weather icon" />
      <div>{Math.round(temp)}°</div>
    </div>
  );
}

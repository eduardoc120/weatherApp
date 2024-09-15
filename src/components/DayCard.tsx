
import '../assets/styles/components/DayCard.scss';

import { Weather, Lang } from '../types'; 

interface DayCardProps {
  dt: number;
  min: number;
  max: number;
  lang: Lang;
  weather: Weather[];
}

export function DayCard({ dt, min, max, weather, lang }: DayCardProps) {

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const date = new Date(dt * 1000);
  const dayName = date.toLocaleDateString(lang.code === 'en' ? 'en-US' : 'es-ES', { weekday: 'long' });
  const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

  return (
    <div className="day-card">
      <div>{capitalizedDayName}</div>
      <img src={iconUrl} alt="Weather Icon" />
      <div>Min: {Math.round(min)}° - Max: {Math.round(max)}°</div>
    </div>
  );
}

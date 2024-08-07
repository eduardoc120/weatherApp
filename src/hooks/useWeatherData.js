
import { useState, useEffect } from "react";
import { getWeather } from "../services/getWeather";

export const useWeatherData = (location, lang) => {
  const [weatherData, setWeatherData] = useState(null);
  const [nextHours, setNextHours] = useState(null);
  const [nextDays, setNextDays] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeather(location.toLowerCase(), lang)
      .then((response) => {
        if (response) {
          setWeatherData(response);
          setNextHours(response.hourly.slice(0, 4))
          setNextDays(response.daily.slice(0, 3))
        }
      })
      .catch((error) => {
        setError(error.message);
      })
  }, [location, lang]);

  return { weatherData, nextHours, nextDays, error };
}

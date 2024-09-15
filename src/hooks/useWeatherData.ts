
import { useState, useEffect } from "react";
import { getWeather } from "../services/getWeather";
import { Current, Daily, Lang, Location, WeatherData, WeatherResponse } from "@/types";

export const useWeatherData = (location: Location, lang: Lang): WeatherResponse => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [nextHours, setNextHours] = useState<Current[] | null>(null);
  const [nextDays, setNextDays] = useState<Daily[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getWeather(location, lang)
      .then((response) => {
        if (response) {
          setWeatherData(response.weatherData);
          if (response.nextHours) {
            setNextHours(response.nextHours.slice(0, 4));
          }
          if (response.nextDays) {
            setNextDays(response.nextDays.slice(0, 3))
          }
        }
      })
      .catch((error) => {
        setError(error.message);
      })
  }, [location, lang.code]);

  return { weatherData, nextHours, nextDays, error };
}

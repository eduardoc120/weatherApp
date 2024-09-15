import { Coordinates, Lang, Location, WeatherResponse } from "@/types";

const API_URL = `https://api.openweathermap.org/data/3.0/onecall?units=metric&exclude=minutely,alerts`;
const API_KEY = "e70c9a0a71874775b27e8cd951efc3c2";
const latLonCities: Record<Location, Coordinates> = {
  Valencia: {
    lat: 39.47391,
    lon: -0.37966,
  },
  Barcelona: {
    lat: 41.38879,
    lon: 2.15899,
  },
  Alicante: {
    lat: 38.3452,
    lon: -0.4815,
  },
};

export const getWeather = async (
  city: Location,
  lang: Lang
): Promise<WeatherResponse> => {
  try {
    const res = await fetch(
      `${API_URL}&lat=${latLonCities[city].lat}&lon=${latLonCities[city].lon}&lang=${lang.code}&appid=${API_KEY}`
    );

    if (!res.ok)
      throw new Error(`Error getting the weather: ${res.statusText}`);
    const json = await res.json();
    return { weatherData: json, nextHours: json.hourly, nextDays: json.daily, error: null };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error");
    }
  }
};

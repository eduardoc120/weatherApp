const API_URL = `https://api.openweathermap.org/data/3.0/onecall?units=metric&exclude=minutely,alerts`;
const API_KEY = "e70c9a0a71874775b27e8cd951efc3c2";
const latLonCities = {
  valencia: {
    lat: 39.47391,
    lon: -0.37966,
  },
  barcelona: {
    lat: 41.38879,
    lon: 2.15899,
  },
  alicante: {
    lat: 38.3452,
    lon: -0.4815,
  },
};

export const getWeather = async (city, lang) => {
  try {
    const res = await fetch(
      `${API_URL}&lat=${latLonCities[city].lat}&lon=${latLonCities[city].lon}&lang=${lang}&appid=${API_KEY}`
    );

    if (!res.ok)
      return new Error(`Error getting the weather: ${res.statusText}`);
    const json = await res.json();
    return json;
  } catch (error) {
    if (error) return error;
  }

  return new Error("Unknown error");
};

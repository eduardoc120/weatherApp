
export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherResponse {
  weatherData: WeatherData | null;
  nextHours: Current[] | null;
  nextDays: Daily[] | null;
  error: string | null;
}

export type Location = 'Valencia' | 'Alicante' | 'Barcelona';
export type City = "valencia" | "barcelona" | "alicante";

export interface Lang {
  code: 'en' | 'es';
  label: 'English' | 'Español';
}

export const locations: Location[] = ['Valencia', 'Alicante', 'Barcelona'];

export const langs: Lang[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' }
];


export interface WeatherData {
  lat:             number;
  lon:             number;
  timezone:        string;
  timezone_offset: number;
  current:         Current;
  hourly:          Current[];
  daily:           Daily[];
}

export interface Current {
  dt:         number;
  sunrise?:   number;
  sunset?:    number;
  temp:       number;
  feels_like: number;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  uvi:        number;
  clouds:     number;
  visibility: number;
  wind_speed: number;
  wind_deg:   number;
  weather:    Weather[];
  wind_gust?: number;
  pop?:       number;
  rain?:      Rain;
}

export interface Rain {
  "1h": number;
}

export interface Weather {
  id:          number;
  main:        Main;
  description: Description;
  icon:        string;
}

export enum Description {
  BrokenClouds = "broken clouds",
  ClearSky = "clear sky",
  FewClouds = "few clouds",
  LightRain = "light rain",
  ModerateRain = "moderate rain",
  OvercastClouds = "overcast clouds",
  ScatteredClouds = "scattered clouds",
}

export enum Main {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
}

export interface Daily {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  moonrise:   number;
  moonset:    number;
  moon_phase: number;
  summary:    string;
  temp:       Temp;
  feels_like: FeelsLike;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  wind_speed: number;
  wind_deg:   number;
  wind_gust:  number;
  weather:    Weather[];
  clouds:     number;
  pop:        number;
  rain?:      number;
  uvi:        number;
}

export interface FeelsLike {
  day:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Temp {
  day:   number;
  min:   number;
  max:   number;
  night: number;
  eve:   number;
  morn:  number;
}

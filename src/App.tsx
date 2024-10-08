import "./assets/styles/App.scss";

import { useState } from "react";

import { WeatherInfo } from "./components/WeatherInfo";
import { HourCard } from "./components/HourCard";
import { DayCard } from "./components/DayCard";

import { useWeatherData } from "./hooks/useWeatherData";
import { ContactForm } from "./components/ContactForm";

import { Location, Lang, locations, langs } from './types';

function App() {
  const [location, setLocation] = useState<Location>(locations[0]);
  const [lang, setLang] = useState<Lang>(langs[0]);
  const { weatherData, nextHours, nextDays, error } = useWeatherData(location, lang);

  const handleLangClick = (newLang: Lang) => {
    if (lang.code === newLang.code) return;
    setLang(newLang);
  };

  const handleLocationClick = (newLocation: Location) => {
    if (location === newLocation) return;
    setLocation(newLocation);
  };

  const textNextHours = lang.code === 'en' ? `Next hours: `: `Próximas horas:`;
  const textNextDays = lang.code === 'en' ? `Next days:` : `Próximos días:`;
  const textLocations = lang.code === 'en' ? `Locations` : `Ciudades`;

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      <aside className="sidebar">
        <div>
          <h3>{textLocations}</h3>
          <div className="cities">
            {locations.map((city) => (
              <button
                key={city}
                className={location === city ? 'selected' : ''}
                onClick={() => handleLocationClick(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
        <ContactForm lang={lang} />
      </aside>
      <main className="content">
        <div className="lang">
          {langs.map(({ code, label }: Lang) => (
            <button
              key={code}
              className={lang.code === code ? 'selected' : ''}
              onClick={() => handleLangClick({ code, label })}
            >
              {label}
            </button>
          ))}
        </div>
        <div>
          <WeatherInfo
            city={location}
            currentTemp={weatherData.current.temp}
            max={weatherData.daily[0].temp.max}
            min={weatherData.daily[0].temp.min}
            description={weatherData.current.weather[0].description}
            icon={weatherData.current.weather[0].icon}
          />
          <section className="upcoming-container">
            <p>{textNextHours}</p>
            <div className="next-hours-cards">
              {nextHours?.map((hour) => (
                <HourCard
                  key={hour.dt}
                  dt={hour.dt}
                  temp={hour.temp}
                  weather={hour.weather}
                  lang={lang}
                />
              ))}
            </div>
          </section>
          <section className="upcoming-container">
            <p>{textNextDays}</p>
            <div className="next-days-cards">
              {nextDays?.map((day) => (
                <DayCard
                  key={day.dt}
                  dt={day.dt}
                  min={day.temp.min}
                  max={day.temp.max}
                  weather={day.weather}
                  lang={lang}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

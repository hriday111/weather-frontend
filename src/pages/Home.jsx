import { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import ForecastCard from "../components/ForecastCard";
import SummaryCard from "../components/SummaryCard";
import { getForecast, getSummary } from "../services/weatherApi";

export default function Home() {
  const [forecast, setForecast] = useState(null);
  const [summary, setSummary] = useState(null);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [city, setCity] = useState('');

    // fetch both forecast + summary + reverse‐geocode
    const handleFetch = async (lat, lon, lang = 'pl') => {
      try {
        const [forecastData, summaryData] = await Promise.all([
          getForecast(lat, lon, lang),
          getSummary( lat, lon, lang),
        ]);
        setForecast(forecastData);
        setSummary(summaryData);
        reverseGeocode(lat, lon);
      } catch (err) {
        console.error(err);
        alert('Failed to fetch weather data');
      }
    };
  
    // call OpenStreetMap Nominatim for reverse geocoding
    const reverseGeocode = async (lat, lon) => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );
        const data = await res.json();
        const address = data.address || {};
        const found =
          address.city ||
          address.town ||
          address.village ||
          address.county ||
          address.state ||
          '';
        setCity(found);
      } catch (err) {
        console.error('Reverse geocode failed', err);
      }
    };
  
    // on-mount, auto-fetch by geolocation / fall back to Warsaw
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => handleFetch(pos.coords.latitude, pos.coords.longitude),
          () => handleFetch(52.2297, 21.0122) // Warsaw
        );
      } else {
        handleFetch(52.2297, 21.0122);
      }
    }, []);
  return (
        <div className="relative h-screen w-screen overflow-hidden text-white">

        {/* background image layer */}
        <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/bg-weather.jpg')", // replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",

      }}
    >
  

        {/* content layer */}
        <div className="flex flex-col h-full w-full">
        {/* HEADER */}
        <header className="p-4 text-center text-4xl font-bold shadow backdrop-blur bg-white/10 border-b border-white/30">
            {city ? `Weather in ${city}` : "Weather Forecast"}
        </header>
        {/* INPUT */}
        <div className="flex justify-center p-4 backdrop-blur bg-transparent border-b border-white/30">
          <InputForm onSubmit={handleFetch} />
        </div>

        {/* FORECAST + ARROWS */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          {forecast && (
            <div className="relative flex-1 flex items-center justify-center mt-4">
              {/* arrows */}
              <div className="absolute inset-y-0 w-full flex justify-between items-center px-24 pointer-events-none">
                <button
                  onClick={() => setCurrentDayIndex(i => Math.max(i - 1, 0))}
                  className="pointer-events-auto text-white text-[6rem] bg-transparent 
                            backdrop-blur-md border border-white/30 rounded-full p-4 
                            hover:bg-white/10 transition shadow-xl"
                >
                  &lt;
                </button>
                <button
                  onClick={() => setCurrentDayIndex(i => Math.min(i + 1, forecast.days.length - 1))}
                  className="pointer-events-auto text-white text-[6rem] bg-transparent 
                            backdrop-blur-md border border-white/30 rounded-full p-4 
                            hover:bg-white/10 transition shadow-xl"
                >
                  &gt;
                </button>
              </div>
              {/* forecast card */}
              <ForecastCard day={forecast.days[currentDayIndex]} />
            </div>
          )}
          {!forecast && (
            <div className="text-2xl text-white">No forecast data available.</div>
          )}
        </div>

        {/* SUMMARY */}
        {summary && (
            <div className="p-4 text-center bg-white/10 backdrop-blur border-t border-white/30 rounded max-w-xl mx-auto mb-4">
            <SummaryCard summary={summary} />
            </div>
        )}
        </div>
        </div>

        </div>
  );
}

export default function ForecastCard({ day }) {
    return (
      <div className="aspect-[3/4] w-3/5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-12 text-white text-3xl flex flex-col justify-center items-center space-y-6">
        <h3 className="font-bold text-4xl mb-4">{day.day} &#x2022; {day.date}</h3>
        <p>Weather Code: {day.weather_code}</p>
        <p>Max Temp: {day.temp_max}°C</p>
        <p>Min Temp: {day.temp_min}°C</p>
        <p>Energy: {day.energy_kwh.toFixed(2)} kWh</p>
      </div>
    );
  }
  
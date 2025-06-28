import { useState } from 'react';

export default function InputForm({ onSubmit }) {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(lat, lon);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-4 p-4 bg-transparent backdrop-blur-md 
                 border border-white/30 rounded-xl shadow-md max-w-md mx-auto"
    >
      <input
        type="number"
        step="any"
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        className="w-32 p-3 rounded bg-transparent placeholder-white text-white text-lg 
                   border border-white/30 backdrop-blur-sm focus:outline-none"
      />
      <input
        type="number"
        step="any"
        placeholder="Longitude"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
        className="w-32 p-3 rounded bg-transparent placeholder-white text-white text-lg 
                   border border-white/30 backdrop-blur-sm focus:outline-none"
      />
      <button
        type="submit"
        className="px-6 py-3 text-lg text-white bg-transparent border border-white/30 
                   backdrop-blur-sm rounded-xl hover:bg-white/10 transition"
      >
        Get Weather
      </button>
    </form>
  );
}

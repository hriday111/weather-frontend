export default function SummaryCard({ summary }) {
    return (
        <div className="rounded p-8 shadow bg-white/20 backdrop-blur text-white max-w-xl mx-auto text-xl space-y-2 mt-4">
        <h3 className="font-bold text-3xl mb-4">Summary</h3>
        <p>Avg Pressure: {summary.average_pressure.toFixed(2)} hPa</p>
        <p>Avg Sun Hours: {summary.average_sun_hours.toFixed(1)}</p>
        <p>Temp Range: {summary.min_temperature}°C - {summary.max_temperature}°C</p>
        <p>Description: {summary.week_description}</p>
      </div>
      
    );
  }
  
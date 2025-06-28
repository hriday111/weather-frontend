# Weather Frontend

A modern React + Tailwind + Vite frontend for displaying weather forecasts, connected to a custom Go-based backend. 

## Features

- Fetches 7-day weather forecast via coordinates (lat/lon)
- Automatically reverse-geocodes to show nearest city name
- Dynamic forecast navigation (next/previous day)
- Summary panel with average pressure, temperature range, and sun hours
- Clean project structure and Docker deploy

## Technologies

- React 19
- TailwindCSS 4.x
- Vite
- Axios for API calls

## Docker support

This app can be built and served with Docker, see below.

---

## Getting Started

### Docker
```git clone https://github.com/hriday111/weather-frontend```

```docker build -t weather-frontend .```

```docker run -d -p 5173:80 weather-frontend```


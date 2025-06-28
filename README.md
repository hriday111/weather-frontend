# Weather Frontend

A modern React + Tailwind + Vite frontend for displaying weather forecasts, connected to a custom Go-based backend. 


## Check it out live at
https://myweather.07042006.xyz/

If you allow it to access your location, then it gets the weather at your location, else defaults to warsaw/poland

you can also insert custom co-ordinates
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


## Directory Structure

/src has all the source files, fuch as componenets (weather cards and input forms), page (home page), api services

## TO-DO

- Add a map-picker, where a user can place a pin on world map and the co-ords are extracted and weather is displayed
- Add a text input to search for cites.

### Docker
```git clone https://github.com/hriday111/weather-frontend```

```docker build -t weather-frontend .```

```docker run -d -p 5173:80 weather-frontend```


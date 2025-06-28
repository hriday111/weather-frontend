import axios from "axios";

const API_BASE = "https://wback.07042006.xyz";

export const getForecast = async (lat, lon, lang = "pl") => {
  const { data } = await axios.get(`${API_BASE}/forecast`, {
    params: { lat, lon, lang }
  });
  return data;
};

export const getSummary = async (lat, lon, lang = "pl") => {
  const { data } = await axios.get(`${API_BASE}/summary`, {
    params: { lat, lon, lang }
  });
  return data;
};

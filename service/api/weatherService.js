import http from "./httpService";

const BASE_URL = "http://api.openweathermap.org";
const ApiKey = "61390521c98729124d248422ec38b60b";
const city = "Galle";
const country = "lk";


export function getWeatherData() {
  const endPoint = `${BASE_URL}/data/2.5/weather?q=${city},${country}&APPID=${ApiKey}`;
  return http.get(endPoint);
}
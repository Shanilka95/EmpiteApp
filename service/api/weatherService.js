import { baseUrl } from '../../constant/APIConstants';
import http from "./httpService";

export function getWeatherData(username) {
    const endPoint = baseUrl + 'Consumer/getTripDetails/' + username;
    return http.get(endPoint);
  }
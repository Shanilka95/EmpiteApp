import http from "./httpService";

export function getGoogleData(lat, lang) {
  const endPoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lang}&radius=5000&type=restaurant&key=AIzaSyBSG46CNezqjoRmz0KHz6YfBtQMLFi3rC8`;
  return http.get(endPoint);
}

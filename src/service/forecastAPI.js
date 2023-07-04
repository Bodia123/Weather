export const currentWeather = cityName => {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=52f290206f0e4fd69a683727230407&q=${cityName}&lang=uk`
  )
    .then(res => res.json())
    .catch(console.log);
};
export const currentForecast = (cityName, day = 5) => {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=52f290206f0e4fd69a683727230407&q=${cityName}&days=${day}&aqi=no&alerts=no&lang=uk`
  )
    .then(res => res.json())
    .catch(console.log);
};

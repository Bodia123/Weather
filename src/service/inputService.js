export const searchInputApi = function (city) {
  return fetch(
    `https://api.weatherapi.com/v1/search.json?key=52f290206f0e4fd69a683727230407&q=${city}&lang=uk`
  )
    .then(res => res.json())
    .catch(console.log);
};

// 2514057

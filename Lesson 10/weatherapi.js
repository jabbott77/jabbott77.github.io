const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a0606e0113b21e757ac98d42ce6de0ab";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
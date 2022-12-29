const API_KEY = '403484eb77eb90aa3ead7aaf99498745';

function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('.weather');
      const city = document.querySelector('.city');
      const temp = parseInt(data.main.temp);
      weather.innerText = `${data.weather[0].main}, ${temp}℃,`;
      city.innerText = `${data.name}`;
    });
}

function onGeoError() {
  alert(`Can't find you. No weather for you.`);
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);

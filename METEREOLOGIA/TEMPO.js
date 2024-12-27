// API key para OpenWeatherMap
const API_KEY = 'ebcb53c86204f15ea19f787550a428c7';

// recebe referencias dos elementos
const elIconWeather = document.getElementById('icon-weather');
const elTemperature = document.getElementById('temperatura');
const elCidade = document.getElementById('Cidade');
const elHumidade = document.getElementById('humidade');
const elVento = document.getElementById('vento');
const elcard = document.querySelector('.card'); // gets the element with class "card"

// função que recebe informação de OpenWeatherMap API
function getData(local) {
  // Constrói API URL com o nome da cidade e API key
  const route = `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt_br&units=metric&appid=${API_KEY}`;
  // vai buscar dados da API e retorna
  return fetch(route).then(response => response.json());
}

// função para guardar a submissão
function handleSubmit(evento) {
  // prever o comportamento da submissão default do form
  evento.preventDefault();
  
  // recebe o nome da cidade
  const value = document.querySelector('[name="local"]').value;
  
  // chama a função getData  com o nome da cidade
  getData(value).then(data => {
    console.log(data);
    
    // atualiza os elementos com a informação recebida
    elTemperature.innerHTML = Math.floor(data.main.temp) + "°C";
    elCidade.innerHTML = data.name;
    elHumidade.innerHTML = data.main.humidity + "%";
    elVento.innerHTML = data.wind.speed + "km/h";
    
    // atualiza imagem do icone de temperatura
    const icon = data.weather[0].main.toLocaleLowerCase();
    const src = `./icons/${icon}.png`;
    elIconWeather.setAttribute('src', src);
  });
}

// adiciona um event listener ao elemento form 
document.querySelector('form').addEventListener('submit', handleSubmit);
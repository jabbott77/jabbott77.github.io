window.addEventListener('load',(event)=>{
    // add code here to run when page loads
    const menubutton = document.querySelector('.menu');
    const mainnav = document.querySelector('.navigation')   
    
    menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
    
    /*** Programming Notes **************************************
      Arrow Functions - es6 syntactically compact alternative to a regular function expression
      see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      or https://www.w3schools.com/js/js_arrow_function.asp
    
      classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      */
});

window.addEventListener('load', (event)=>{
  const lu = document.querySelector('#lastupdated');
  lu.textContent = document.lastModified;

  const cry = document.querySelector("#copyrightyear");
  cry.textContent = new Date().getFullYear();

  const b =document.querySelector("#banner");
  today = new Date().getDay();
  if (today==5){
      b.style.display = "block";
  }
});
const URL = 'https://jabbott77.github.io/Final%20Project/temples.json';

fetch(URL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];

    for(i = 0; i < temples.length; i++){
      if(temples[i].name == 'Asuncion Paraguay' || temples[i].name == 'Bern Switzerland' || temples[i].name == 'Carcas Venezuela' || temples[i].name == 'Manila Philippines'){
        let temple_name  = document.createElement('section');
        let text = document.createElement('div');
        let h1 = document.createElement('h1');    
        let address = document.createElement('p');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let services = document.createElement('p');
        let history = document.createElement('p');
        let closure = document.createElement('p');
        let image = document.createElement('img');
        let hr = document.createElement('hr');

        image.setAttribute('src', 'images/' + temples[i].image);
        h1.textContent = temples[i].name;
        address.textContent = 'Address: ' + temples[i].address;
        email.textContent = 'Email: ' + temples[i].email;
        phone.textContent = 'Phone: ' + temples[i].phone;
        services.textContent = 'Services: ' + temples[i].services;
        history.textContent = 'History: ' + temples[i].history;
        closure.textContent = 'Closure: ' + temples[i].closure;
        

        text.appendChild(h1);
        text.appendChild(hr)
        text.appendChild(address);
        text.appendChild(email);
        text.appendChild(phone);
        text.appendChild(services);
        text.appendChild(history);
        text.appendChild(closure);

        temple_name.appendChild(text);
        temple_name.appendChild(image);

        //document.getElementById('towns').appendChild(town_name);

        if(temples[i].name == 'Asuncion Paraguay'){
          document.getElementById('paraguay').appendChild(temple_name);
        }
        else if(temples[i].name == 'Bern Switzerland'){
          document.getElementById('switzerland').appendChild(temple_name);
        }
        else if (temples[i].name == 'Carcas Venezuela'){
          document.getElementById('venezuela').appendChild(temple_name);
        }
        else if (temples[i].name == 'Manila Philippines'){
          document.getElementById('manila').appendChild(temple_name);
        }
      }
    };
    
      let weatherRequest1 = new XMLHttpRequest();
let apiURLstring1 = 'https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&APPID=a0606e0113b21e757ac98d42ce6de0ab';
const requestURL1 = 'https://jabbott77.github.io/Final%20Project/temples.json';
weatherRequest1.open('Get', apiURLstring1, true);
weatherRequest1.send();

weatherRequest1.onload = function() {
    let weatherData = JSON.parse(weatherRequest1.responseText);
    console.log(weatherData);


    let current = weatherData.weather[0].main;
    let temp = Math.round(weatherData.main.temp, 0);
    let humid = Math.round(weatherData.main.humidity, 0);
    let windspeed = weatherData.wind.speed;
    let imageConditions = 'https://openweathermap.org/weather-conditions';

    document.getElementById('current1').innerHTML = current;
    document.getElementById('temp1').innerHTML = temp;
    document.getElementById('humid1').innerHTML = humid;
    document.getElementById('windspeed1').innerHTML = windspeed;

    document.getElementById('conditions-icon').setAttribute('src', imageConditions + weatherData.weather[0].icon + '.jpg');
    document.getElementById('conditions-icon').setAttribute('alt', weatherData.weather[0].description);
}
    });

    let weatherRequest2 = new XMLHttpRequest();
    let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&APPID=a0606e0113b21e757ac98d42ce6de0ab';
    const requestURL2 = 'https://jabbott77.github.io/Final%20Project/temples.json';
    weatherRequest2.open('Get', apiURLstring2, true);
    weatherRequest2.send();
    
    weatherRequest2.onload = function() {
        let weatherData = JSON.parse(weatherRequest2.responseText);
        console.log(weatherData);
    
    
        let current = weatherData.weather[0].main;
        let temp = Math.round(weatherData.main.temp, 0);
        let humid = Math.round(weatherData.main.humidity, 0);
        let windspeed = weatherData.wind.speed;
        let imageConditions = 'https://openweathermap.org/weather-conditions';
    
        document.getElementById('current2').innerHTML = current;
        document.getElementById('temp2').innerHTML = temp;
        document.getElementById('humid2').innerHTML = humid;
        document.getElementById('windspeed2').innerHTML = windspeed;
    
        document.getElementById('conditions-icon').setAttribute('src', imageConditions + weatherData.weather[0].icon + '.jpg');
        document.getElementById('conditions-icon').setAttribute('alt', weatherData.weather[0].description);
    };
        let weatherRequest3 = new XMLHttpRequest();
        let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&APPID=a0606e0113b21e757ac98d42ce6de0ab';
        const requestURL3 = 'https://jabbott77.github.io/Final%20Project/temples.json';
        weatherRequest3.open('Get', apiURLstring3, true);
        weatherRequest3.send();
        
        weatherRequest3.onload = function() {
            let weatherData = JSON.parse(weatherRequest3.responseText);
            console.log(weatherData);
        
        
            let current = weatherData.weather[0].main;
            let temp = Math.round(weatherData.main.temp, 0);
            let humid = Math.round(weatherData.main.humidity, 0);
            let windspeed = weatherData.wind.speed;
            let imageConditions = 'https://openweathermap.org/weather-conditions';
        
            document.getElementById('current3').innerHTML = current;
            document.getElementById('temp3').innerHTML = temp;
            document.getElementById('humid3').innerHTML = humid;
            document.getElementById('windspeed3').innerHTML = windspeed;
        
            document.getElementById('conditions-icon').setAttribute('src', imageConditions + weatherData.weather[0].icon + '.jpg');
            document.getElementById('conditions-icon').setAttribute('alt', weatherData.weather[0].description);
        };

            let weatherRequest4 = new XMLHttpRequest();
            let apiURLstring4 = 'https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&APPID=a0606e0113b21e757ac98d42ce6de0ab';
            const requestURL4 = 'https://jabbott77.github.io/Final%20Project/temples.json';
            weatherRequest4.open('Get', apiURLstring4, true);
            weatherRequest4.send();
            
            weatherRequest4.onload = function() {
                let weatherData = JSON.parse(weatherRequest4.responseText);
                console.log(weatherData);
            
            
                let current = weatherData.weather[0].main;
                let temp = Math.round(weatherData.main.temp, 0);
                let humid = Math.round(weatherData.main.humidity, 0);
                let windspeed = weatherData.wind.speed;
                let imageConditions = 'https://openweathermap.org/weather-conditions';
            
                document.getElementById('current4').innerHTML = current;
                document.getElementById('temp4').innerHTML = temp;
                document.getElementById('humid4').innerHTML = humid;
                document.getElementById('windspeed4').innerHTML = windspeed;
            
                document.getElementById('conditions-icon').setAttribute('src', imageConditions + weatherData.weather[0].icon + '.jpg');
                document.getElementById('conditions-icon').setAttribute('alt', weatherData.weather[0].description);
            };
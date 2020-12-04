let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=a0606e0113b21e757ac98d42ce6de0ab';
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    let current = weatherData.weather[0].main;
    let temp = Math.round(weatherData.main.temp, 0);
    let humid = Math.round(weatherData.main.humidity, 0);
    let windspeed = weatherData.wind.speed;
    let imageConditions = 'https://openweathermap.org/weather-conditions';

    document.getElementById('current').innerHTML = current;
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('humid').innerHTML = humid;
    document.getElementById('windspeed').innerHTML = windspeed;
    document.getElementById('windChill').innerHTML = getWindChill();

    document.getElementById('conditions-icon').setAttribute('src', imageConditions + weatherData.weather[0].icon + '.png');
    document.getElementById('conditions-icon').setAttribute('alt', weatherData.weather[0].description);
}

function getWindChill() {
    let tempF = parseInt(document.getElementById('temp').innerHTML);
    let speed = parseInt(document.getElementById('windspeed').innerHTML);
    result = windChill(tempF, speed);
    return result;
}

function windChill(tempF, speed) {
    let windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    let soCold = windChillFactor.toFixed(0);

    return soCold;
}

let forecastRequest = new XMLHttpRequest();
let forecastApiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=a0606e0113b21e757ac98d42ce6de0ab';
forecastRequest.open('Get', forecastApiURLstring, true);
forecastRequest.send();


function findDayOfWeek(apiDay) {
    let dayDate = new Date(apiDay);
    let day = dayDate.getDay();
    let dayOfWeek;
    switch (day) {
        case 0:
            dayOfWeek = 'Sunday';
            break;
        case 1:
            dayOfWeek = 'Monday';
            break;
        case 2:
            dayOfWeek = 'Tuesday';
            break;
        case 3:
            dayOfWeek = 'Wednesday';
            break;
        case 4:
            dayOfWeek = 'Thursday';
            break;
        case 5:
            dayOfWeek = 'Friday';
            break;
        case 6:
            dayOfWeek = 'Saturday';
            break;
        default:
            break;
    }
    return dayOfWeek;
}


forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    let imageWeather = 'https://openweathermap.org/img/w/';
    let forecastArray = forecastData.list;
    let day1, day2, day3, day4, day5;
    let z = 0;

    for (let i = 0; i < forecastArray.length; i++) {
        let x = forecastData.list[i].dt_txt;
        let y = x.includes('18:00:00');
        if (y == true) {
            switch (z) {
                case 0:
                    day1 = forecastData.list[i];
                    break;
                case 1:
                    day2 = forecastData.list[i];
                    break;
                case 2:
                    day3 = forecastData.list[i];
                    break;
                case 3:
                    day4 = forecastData.list[i];
                    break;
                case 4:
                    day5 = forecastData.list[i];
                    break;
                default:
                    break;
            }
            z++;
        }
    }


    document.getElementById('day-1').innerHTML = findDayOfWeek(day1.dt_txt);
    document.getElementById('day-2').innerHTML = findDayOfWeek(day2.dt_txt);
    document.getElementById('day-3').innerHTML = findDayOfWeek(day3.dt_txt);
    document.getElementById('day-4').innerHTML = findDayOfWeek(day4.dt_txt);
    document.getElementById('day-5').innerHTML = findDayOfWeek(day5.dt_txt);

    document.getElementById('high-1').innerHTML = Math.round(day1.main.temp_max, 0) + '&deg;';
    document.getElementById('high-2').innerHTML = Math.round(day2.main.temp_max, 0) + '&deg;';
    document.getElementById('high-3').innerHTML = Math.round(day3.main.temp_max, 0) + '&deg;';
    document.getElementById('high-4').innerHTML = Math.round(day4.main.temp_max, 0) + '&deg;';
    document.getElementById('high-5').innerHTML = Math.round(day5.main.temp_max, 0) + '&deg;';

    document.getElementById('img-1').setAttribute('src', imageWeather + day1.weather[0].icon + '.png');
    document.getElementById('img-2').setAttribute('src', imageWeather + day2.weather[0].icon + '.png');
    document.getElementById('img-3').setAttribute('src', imageWeather + day3.weather[0].icon + '.png');
    document.getElementById('img-4').setAttribute('src', imageWeather + day4.weather[0].icon + '.png');
    document.getElementById('img-5').setAttribute('src', imageWeather + day5.weather[0].icon + '.png');

    document.getElementById('weather-1').innerHTML = day1.weather[0].main;
    document.getElementById('weather-2').innerHTML = day2.weather[0].main;
    document.getElementById('weather-3').innerHTML = day3.weather[0].main;
    document.getElementById('weather-4').innerHTML = day4.weather[0].main;
    document.getElementById('weather-5').innerHTML = day5.weather[0].main;
}
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
})

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

fetch(requestURL)
.then(function (response) {
        return response.json();
})
.then(function(jsonObject) {
    const towns = jsonObject.towns;

    for (i=0; i < towns.length; i++) {
        if (towns[i].name == "Soda Springs") {
            for (j = 0; j < towns[i].events.length; j++) {
                let event = document.createElement("p");

                event.textContent = towns[i].events[j];

                document.getElementById("eventList").appendChild(event);
            }
        }
    }
})
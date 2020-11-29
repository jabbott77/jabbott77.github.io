const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(URL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for(i = 0; i < towns.length; i++){
      if(towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
        let town_name  = document.createElement('section');
        let text = document.createElement('div');
        let h1 = document.createElement('h1');    
        let motto = document.createElement('h3');
        let founded = document.createElement('p');
        let pop = document.createElement('p');
        let rain_fall = document.createElement('p');
        let image = document.createElement('img');
        let hr = document.createElement('hr');

        h1.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        founded.textContent = 'Founded in ' + towns[i].yearFounded;
        pop.textContent = 'Population: ' + towns[i].currentPopulation;
        rain_fall.textContent = 'Average Annual Rainfall: ' + towns[i].averageRainfall + ' inches';
        image.setAttribute('src', 'images/' + towns[i].photo);

        text.appendChild(h1);
        text.appendChild(motto);
        text.appendChild(hr)
        text.appendChild(founded);
        text.appendChild(pop);
        text.appendChild(rain_fall);

        town_name.appendChild(text);
        town_name.appendChild(image);

        //document.getElementById('towns').appendChild(town_name);

        if(towns[i].name == 'Preston'){
          document.getElementById('preston').appendChild(town_name);
        }
        else if(towns[i].name == 'Soda Springs'){
          document.getElementById('soda').appendChild(town_name);
        }
        else if (towns[i].name == 'Fish Haven'){
          document.getElementById('fish').appendChild(town_name);
        }
      }
    }
  });
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

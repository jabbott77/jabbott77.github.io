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
/* f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 */
window.addEventListener('load', (event)=>{
    var temp = document.querySelector('#ht').innerHTML;
    var wspeed = document.querySelector('#ws').innerHTML;
    var wchill = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16));
    const wc = document.querySelector('#windchill');
    if (temp < 50 && wspeed > 3.0){
      wc.textContent = wchill;
    }
    else {
      wc.textContent = "N/A"
    }
  })
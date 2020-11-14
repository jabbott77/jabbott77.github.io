const images = document.querySelectorAll('[data-src]');


let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
  };

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } 
else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
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
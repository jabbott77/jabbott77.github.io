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
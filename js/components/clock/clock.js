import { formatNumber } from './formatNumber.js';

function renderClock(selector) {
    
     // validation
    
     // logic
     const DOM = document.querySelector(selector);
     

     const time = [432, 9, 37, 39]; //calcDeadline(targetDate);
     const titles = ['days', 'hours', 'minutes', 'seconds'];
     let HTML = ''; 

     for (let i = 0; i < titles.length; i++) {
        const formatedNumber = formatNumber(time[i]);
        HTML += `<div class="time">
                     <div class="value">${formatedNumber}</div>
                     <div class="title">${titles[i]}</div>
                </div>`;
     }

            

    // DOM.innerText = HTML;
     DOM.innerHTML = HTML;
 }


/*

import { calcDeadline } from './calcDeadline.js';
import { updateClock } from './updateClock.js';

function renderClock(selector, targetDate) {
   

   

    for (let i = 0; i < titles.length; i++) {
        const formatedNumber = formatNumber(time[i]);
        HTML += `<div class="time">
                    <div class="value">${formatedNumber}</div>
                    <div class="title">${titles[i]}</div>
                </div>`;
    }

    // result return
    DOM.innerHTML = HTML;
    
    const allValueDOM = DOM.querySelectorALL('.value');

    

    setInterval();          // daugkartine 
}
*/
export { renderClock }

import { renderClock } from './components/clock/clock.js';
import { progressBar } from './components/progress-bar/progressBar.js';
import { socials} from './components/socials/socials.js';
import { progressBarData } from './data/progressBarData.js';
import { socialsData } from './data/socialsData.js';

renderClock('#hero_clock', '04-19 10:00:00');
socials('#socials_block', socialsData);
progressBar('.left-column', progressBarData);


//pvz su 'socials', kaip jie pradeda matytis, keiciantis matomo ekrano auksciui
/*const socialsDom = document.querySelector('.socials');
console.log([socialsDom]); 
const socialsTop = socialsDom.offsetTop;
const socialsHeight = socialsDom.offsetHeight;
const windowHeight = 0;


addEventListener('scroll', () => {
    console.log(socialsTop + socialsHeight, scrollY + windowHeight);
    if (socialsTop + socialsHeight <=  scrollY + innerHeight) {
        console.log('matomas'); 
    }
    else {
    console.log('ne-matomas');

    }
})

*/








//-kas?
// - koks ivykio tipas?
//-ka daryti?
/*
const logoDOM = document.querySelector('.logo');
console.log(logoDOM);

function handleLogoClick() {
    console.log('Buvo paspaustas logotipas!');
}

logoDOM.addEventListener("click", handleLogoClick); //be skliaustu, nes tada neveiks po spaudimo, o isspausdins kas sklaiustuose.

const btnDOM = document.querySelector('.btn');
let count = 0;
/*
function countVisites() {
    count++;
    btnDOM.innerText = `Click me (${count})`;

}
btnDOM.addEventListener("click", countVisites);

//btnDOM.addEventListener("click", function() {
btnDOM.addEventListener("click", () => {
    count++;
    btnDOM.innerText = `Click me (${count})`;
});
//renderClock('#hero_clock', '04-19 10:00:00');
/*
/js
    /components
        /clock
            clock.js
            uppercase.js
            formatTime.js
        /form
            form.js
            validateData.js
            sendRequest.js
    /data
        clockData.js
        progressBarData.js
        socialsData.js
home.js
*/
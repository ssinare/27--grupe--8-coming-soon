import { renderClock } from './components/clock/clock.js';
import { socials} from './components/socials/socials.js';
import { socialsData } from './data/socialsData.js';

renderClock('#hero_clock', '04-19 10:00:00');
socials('#socials_block', socialsData);



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
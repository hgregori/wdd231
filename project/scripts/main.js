import { initHamburger } from './hamburger.js';
import { initDate } from './date.js';
import { initWayfinding } from './wayfinding.js';
import { trackVisits } from './localStorage.js';

document.addEventListener("DOMContentLoaded", () => {
    initHamburger();
    initDate();
    initWayfinding();
    trackVisits();
});

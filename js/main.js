"use strict";

// import data
import { header } from '../data/header.js';
import hero from '../data/hero.js';
import features from '../data/features.js';
import about from '../data/about.js';
import mainVideo from '../data/main-video.js';
import skills from '../data/skills.js';
import services from '../data/services.js';
import portfolio from '../data/portfolio.js';
import { testimonials } from '../data/testimonials.js';
import contact from '../data/contact.js';
import footer from '../data/footer.js';


// import rendering functions
import { renderHeader, dropMenuLevel1, windowScrolling } from './renderHeader.js';
import renderHero from './renderHero.js';
import { renderFeatures } from './renderFeatures.js';
import renderAbout from './renderAbout.js';
import renderMainVideo from './renderMainVideo.js';
import { contentIsVisible, renderSkillContent } from './renderSkills.js';
import { renderServices } from './renderServices.js';
import {renderPortfolio} from './renderPortfolio.js';
import { renderTestimonials, testimonialsEvents } from './renderTestimonials.js';
import renderContact from './renderContact.js';
import renderFooter from './renderFooter.js';
import renderLightBoxGallery from './renderLightBoxGallery.js';

/*************************
 * HEADER
 *************************/
renderHeader(header, '#main_header > .row');
// header event listener for drop down menus
const headerDOM = document.querySelectorAll('#main_header .navtab > .drop-down');
for (let i = 0; i < headerDOM.length; i++) {
    headerDOM[i].addEventListener('mouseenter', dropMenuLevel1)
}
// header event listener for scrolling
let startPosition = window.pageYOffset;
window.addEventListener('scroll', function () {
    windowScrolling(startPosition);
    startPosition = window.scrollY;
});

/*************************
 * HERO
 *************************/
renderHero('#hero', hero[0]);

/*************************
 * FEATURES
 *************************/
renderFeatures('#features .row', features);

/*************************
 * ABOUT
 *************************/
renderAbout('#about_us', about);

/*************************
 * MAIN VIDEO
 *************************/
renderMainVideo();

/*************************
 * SKILLS
 *************************/
renderSkillContent(skills[0], "#skills");
contentIsVisible();

/*************************
 * SERVICES
 *************************/
renderServices('#services .row', services);

/*************************
 * PORTFOLIO
 *************************/
renderPortfolio();
// setButtonSelected();
const buttons = document.querySelectorAll(".filter > .filter-btn");
const buttonsSizeA = buttons.length;

function setButtonSelected(event) {
    // console.log(event.target);
    setActiveOff(event);
    event.target.classList.add("button-active");
}

function setActiveOff(event) {
    const activeButton = document.querySelector(".filter > .filter-btn.button-active");
    activeButton.classList.remove("button-active");
}

for(let i = 0; i < buttonsSizeA; i++) {
    buttons[i].addEventListener("click", setButtonSelected);
}

/*************************
 * TESTIMONIALS
 *************************/
renderTestimonials(testimonials, '#testimonials');
testimonialsEvents();

/*************************
 * CONTACT
 *************************/

/*************************
 * FOOTER
 *************************/

/*************************
 * LIGHTBOX
 *************************/
renderLightBoxGallery('gallery1');

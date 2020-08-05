"use strict";

// import data


import {header} from '../data/header.js';
// import hero from '../data/hero.js';
import features from '../data/features.js';
// import about from '../data/about.js';
// import mainVideo from '../data/main-video.js';
import skills from '../data/skills.js';
import services from '../data/services.js';
// import portfolio from '../data/portfolio.js';
// import testimonials from '../data/testimonials.js';
// import contact from '../data/contact.js';
// import footer from '../data/footer.js';
// import backToTop from '../data/back-to-top.js';


// import rendering functions


import {renderHeader, dropMenuLevel1, windowScrolling} from './renderHeader.js';
// import renderHero from './renderHero.js';
import { renderFeatures } from './renderFeatures.js';
// import renderAbout from './renderAbout.js';
// import renderMainVideo from './renderMainVideo.js';
import {startCircleAnimation, renderSkillContent} from './renderSkills.js';
import { renderServices } from './renderServices.js';
// import renderPortfolio from './renderPortfolio.js';
// import renderTestimonials from './renderTestimonials.js';
// import renderContact from './renderContact.js';
// import renderFooter from './renderFooter.js';
// import renderBackToTop from './renderBackToTop.js';

// execute

//Redners Skill content 
renderSkillContent(skills[0]);
// If page is refreshed and it shows skill container is visible runs animation 
startCircleAnimation();
// execute functions
renderHeader(header, '#main_header > .row');
renderFeatures('#features .row', features);

renderServices('#services .row', services);

// event listeners & other stuff

// header event listener for drop down menus
const headerDOM = document.querySelectorAll('#main_header .navtab > .drop-down');
for (let i = 0; i < headerDOM.length; i++) {
    headerDOM[i].addEventListener('mouseenter', dropMenuLevel1)
}
// header event listener for scrolling
let startPosition = window.pageYOffset;
window.addEventListener('scroll',function() {
    windowScrolling(startPosition);
    startPosition = window.scrollY; 
    });

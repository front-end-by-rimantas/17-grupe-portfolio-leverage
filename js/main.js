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
import { renderHeader, headerEventListeners } from './renderHeader.js';
import renderHero from './renderHero.js';
import { renderFeatures } from './renderFeatures.js';
import renderAbout from './renderAbout.js';
import renderMainVideo from './renderMainVideo.js';
import { contentIsVisible, renderSkillContent } from './renderSkills.js';
import { renderServices } from './renderServices.js';
import renderPortfolio from './renderPortfolio.js';
import { renderTestimonials, testimonialsEvents } from './renderTestimonials.js';
import renderContact from './renderContact.js';
import renderFooter from './renderFooter.js';
import renderLightBoxGallery from './renderLightBoxGallery.js';

/*************************
 * HEADER
 *************************/
renderHeader(header, '#main_header > .row');
headerEventListeners();

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

/*************************
 * TESTIMONIALS
 *************************/
renderTestimonials(testimonials, '#testimonials');
testimonialsEvents();

/*************************
 * CONTACT
 *************************/
renderContact();

/*************************
 * FOOTER
 *************************/
renderFooter('#main_footer .row', footer);
/*************************
 * LIGHTBOX
 *************************/
renderLightBoxGallery('gallery1');

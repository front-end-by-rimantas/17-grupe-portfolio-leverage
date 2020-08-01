import renderAboutContent from './renderAboutContent.js'
import renderAboutRow from './renderAboutRow.js';
import renderGallery from './renderGallery.js'

function renderAbout(selector, data) {
    renderAboutContent(selector, data.aboutTitle);
    renderAboutRow('#about_us .block', data.aboutData);
    renderGallery('.about-image');
    return;
}
export default renderAbout;
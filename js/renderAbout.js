import renderAboutContent from './renderAboutContent.js'
import renderAboutRow from './renderAboutRow.js';

function renderAbout(selector, data) {
    renderAboutContent(selector, data.aboutTitle);
    renderAboutRow('#about_us .block', data.aboutData);
    return;
}
export default renderAbout;
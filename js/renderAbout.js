import renderAboutContent from './renderAboutContent.js'
import renderAboutRow from './renderAboutRow.js';
import renderLightBoxContent from './renderLightBoxContent.js'
import renderGallery from './renderGallery.js';

function renderAbout(selector, data) {

    renderAboutContent(selector, data.aboutTitle);
    renderAboutRow('#about_us .block', data.aboutData);

    const lightBox = document.querySelectorAll('.about-image img');
    const imagesArray = document.querySelectorAll(`[data-type="gallery1"]`);

    function openOnClick(event) {
        renderLightBoxContent(imagesArray.length, event.target.outerHTML);
        renderGallery('.about-image', 'gallery1');
    }
    for (let i = 0; i < lightBox.length; i++) {
        lightBox[i].addEventListener('click', openOnClick);
    }
    return;
}
export default renderAbout;
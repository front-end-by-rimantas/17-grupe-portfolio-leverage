import renderAboutContent from './renderAboutContent.js'
import renderAboutRow from './renderAboutRow.js';
import renderLightBoxContent from './renderLightBoxContent.js'

function renderAbout(selector, data, dataType) {

    renderAboutContent(selector, data.aboutTitle);
    renderAboutRow('#about_us .block', data.aboutData);

    const lightBox = document.querySelectorAll('.about-image img');
    const imagesArray = document.querySelectorAll(`[data-type="${dataType}"]`);
    function openOnClick(event) {
        event.target.closest('body').querySelector('.light-box').classList.add('show');
        const imageCount = imagesArray.length;
        const clickedImageHTML = event.target.outerHTML;
        renderLightBoxContent(imageCount, clickedImageHTML);
    }

    for (let i = 0; i < lightBox.length; i++) {
        lightBox[i].addEventListener('click', openOnClick);
    }
}
export default renderAbout;
import renderAboutContent from './renderAboutContent.js'
import renderAboutRow from './renderAboutRow.js';
import renderLightBoxContent from './renderLightBoxContent.js'
// import renderGallery from './renderGallery.js';

function renderAbout(selector, data) {

    renderAboutContent(selector, data.aboutTitle);
    renderAboutRow('#about_us .block', data.aboutData);

    const galleryClose = document.querySelector('.light-box .fa-times');
    console.log(galleryClose);
    const lightBox = document.querySelectorAll('.about-image img');
    const imagesArray = document.querySelectorAll(`[data-type="gallery1"]`);

    function openOnClick(event) {
        const images = event.target.parentElement.children;
        event.target.closest('body').querySelector('.light-box').classList.add('show');
        renderLightBoxContent(imagesArray.length, event.target.outerHTML);
        return images;
    }
    function closeOnClick(event) {
        event.target.closest('body').querySelector('.light-box').classList.remove('show');
    }

    for (let i = 0; i < lightBox.length; i++) {
        lightBox[i].addEventListener('click', openOnClick);
    }
    galleryClose.addEventListener('click', closeOnClick);
}
export default renderAbout;
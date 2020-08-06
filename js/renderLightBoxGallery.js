import renderLightBoxContent from './renderLightBoxContent.js';

function renderLightBoxGallery(dataType) {
    const imagesArray = document.querySelectorAll(`[data-type="${dataType}"]`);
    function openOnClick(event) {
        event.target.closest('body').querySelector('.light-box').classList.add('show');
        const imageCount = imagesArray.length;
        const clickedImageHTML = event.target.outerHTML;
        renderLightBoxContent(imageCount, clickedImageHTML, dataType);
    }
    for (let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].addEventListener('click', openOnClick);
    }
    return;
}
export default renderLightBoxGallery;
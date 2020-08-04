import renderGallery from './renderGallery.js';

function renderLightBoxContent(size, imageClicked) {
    console.log();
    let DOM = document.querySelector('.light-box');
    const HTML = `<div class="light-box-header">
                    <div class="gallery">1/${size}</div>
                    <div class="icons">
                        <i class="fa fa-square-o" aria-hidden="true"></i>
                        <i class="fa fa-search-minus" aria-hidden="true"></i>
                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                        <i class="fa fa-download" aria-hidden="true"></i>
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="image">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                    <div>
                        ${imageClicked}
                    </div>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
                <div class="light-box-footer">Fit image</div>`;
    DOM.innerHTML = HTML;

    const galleryClose = document.querySelector('.light-box .fa-times');

    function closeOnClick(event) {
        event.target.closest('body').querySelector('.light-box').classList.remove('show');
    }
    galleryClose.addEventListener('click', closeOnClick);

    renderGallery('.about-image', 'gallery1');

    return;
}
export default renderLightBoxContent;
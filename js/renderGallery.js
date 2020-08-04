import renderLightBox from './renderLightBox.js';

function renderGallery(selector, dataType) {

    const galleryBack = document.querySelector('.light-box .fa-angle-left');
    const galleryForward = document.querySelector('.light-box .fa-angle-right');
    const imagesArray = document.querySelectorAll('[data-type="gallery1"]');
    let lightBoxImage = [];
    for (let i = 0; i < imagesArray.length; i++) {
        if (i != imagesArray.length - 1) {
            let img = '';
            img = imagesArray[i];
            lightBoxImage.push(img);
        }
    }

    let count = 0;
    function backOnClick(event) {
        count = count - 1;

        if (count >= 0 && count < lightBoxImage.length) {
            renderLightBox((lightBoxImage[count].outerHTML), count, lightBoxImage.length);
        } else if (count < 0) {
            count = lightBoxImage.length - 1;
            renderLightBox((lightBoxImage[count].outerHTML), count, lightBoxImage.length);
        }
    }

    function forwardOnClick(event) {
        count = count + 1;

        if (count >= 0 && count < lightBoxImage.length) {
            renderLightBox((lightBoxImage[count].outerHTML), count, lightBoxImage.length);
        } else if (count >= lightBoxImage.length) {
            count = 0;
            renderLightBox((lightBoxImage[count].outerHTML), count, lightBoxImage.length);
        }
    }

    galleryBack.addEventListener('click', backOnClick);
    galleryForward.addEventListener('click', forwardOnClick);



    return;
}
export default renderGallery;
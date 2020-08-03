import renderLightBox from './renderLightBox.js';

function renderGallery(selector, dataType) {
    const gallery = document.querySelector(selector);
    const galleryClose = document.querySelector('.light-box .fa-times');
    const galleryBack = document.querySelector('.light-box .fa-angle-left');
    const galleryForward = document.querySelector('.light-box .fa-angle-right');
    const imagesArray = document.querySelectorAll(`[data-type="${dataType}"]`);
    function openOnClick(event) {
        const images = event.target.parentElement.children;
        event.target.closest('body').querySelector('.light-box').classList.add('show');
        return images;
    }

    function closeOnClick(event) {
        event.target.closest('body').querySelector('.light-box').classList.remove('show');
    }
    let count = 0;
    function backOnClick(event) {
        count = count - 1;

        if (count >= 0 && count < imagesArray.length) {
            renderLightBox((imagesArray[count].outerHTML), count, imagesArray.length);
        } else if (count < 0) {
            count = imagesArray.length - 1;
            renderLightBox((imagesArray[count].outerHTML), count, imagesArray.length);
        }
        console.log(count);
    }

    function forwardOnClick(event) {
        count = count + 1;

        if (count >= 0 && count < imagesArray.length) {
            renderLightBox((imagesArray[count].outerHTML), count, imagesArray.length);
        } else if (count >= imagesArray.length) {
            count = 0;
            renderLightBox((imagesArray[count].outerHTML), count, imagesArray.length);
        }
        console.log(count);
    }

    galleryBack.addEventListener('click', backOnClick);
    galleryForward.addEventListener('click', forwardOnClick);


    gallery.addEventListener('click', openOnClick);
    galleryClose.addEventListener('click', closeOnClick);
    return;
}
export default renderGallery;
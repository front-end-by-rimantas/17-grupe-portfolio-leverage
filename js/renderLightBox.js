function renderLightBox(image, count, size) {
    const DOM = document.querySelector('.light-box .image div');
    const galleryDOM = document.querySelector('.light-box .gallery');

    DOM.innerHTML = image;
    const text = count + 1 + "/" + size;
    galleryDOM.innerText = text;
    return;
}
export default renderLightBox;
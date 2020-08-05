function renderLightBox(image, count, size) {
    const DOM = document.querySelector('.light-box .image div');
    const ArraySize = document.querySelector('.light-box .gallery');
    const HTML = image;
    const domImage = DOM.innerHTML = HTML;
    const text = count + 1 + "/" + size;
    const domSize = arraySize.innerText = text;
    return;
}
export default renderLightBox;
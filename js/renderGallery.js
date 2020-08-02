function renderGallery(selector) {
    const gallery = document.querySelectorAll(selector);
    const galleryClose = document.querySelector('.light-box .fa-times');

    const size = gallery[0].children.length;

    function openOnClick(event) {
        event.target.closest('body').querySelector('.light-box').classList.add('show');
    }
    function closeOnClick(event) {
        event.target.closest('body').querySelector('.light-box').classList.remove('show');
    }
    for (let i = 0; i < size; i++) {
        console.log(gallery[0].children[i].dataset.type);
        gallery[i].addEventListener('click', openOnClick)
    }
    galleryClose.addEventListener('click', closeOnClick);
    return;
}
export default renderGallery;
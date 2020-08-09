import renderLightBoxContent from './renderLightBoxContent.js'
function renderContact() {
    const contactsVideo = document.querySelector('#contact .contacts-video img');
    function openLightBox(event) {
        event.target.closest('body').querySelector('.light-box').classList.add('show');
        const videoHTML = document.querySelector('#contact .contacts-video video');
        const HTML = `<a href="./video/contactsVideo.mp4">
                        <video poster="https://i.ytimg.com/vi_webp/7e90gBu4pas/maxresdefault.webp" data-type="gallery2">
                            <source src="./video/contactsVideo.mp4" type="video/mp4">
                            <source src="./video/contactsVideo.mp4" type="video/ogg">
                            Jūsų naršyklė nepalaiko vaizdo įrašų tag'ų.
                        </video>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>`
        renderLightBoxContent(1, HTML, 'gallery2');
    }
    contactsVideo.addEventListener('click', openLightBox);
    return;
}

export default renderContact;